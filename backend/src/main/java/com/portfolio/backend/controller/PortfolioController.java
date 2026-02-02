package com.portfolio.backend.controller;


import com.portfolio.backend.repository.ProjectRepository;
import com.portfolio.backend.service.EmailService;
import com.portfolio.backend.dto.ContactForm;
import com.portfolio.backend.model.Project;
import io.github.bucket4j.Bandwidth;
import io.github.bucket4j.Bucket;
import io.github.bucket4j.Refill;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:5173")
public class PortfolioController {

    @Autowired
    private EmailService emailService;

    @Autowired
    private ProjectRepository projectRepository;

    @GetMapping("/projects")
    public List<Project> getProjects() {
        return projectRepository.findAll();
    }

    private final Map<String, Bucket> cache = new ConcurrentHashMap<>();

    private Bucket resolveBucket(String ip) {
        return cache.computeIfAbsent(ip, k -> {
            // Allow 5 requests per 1 hour
            Bandwidth limit = Bandwidth.classic(5, Refill.greedy(5, Duration.ofHours(1)));
            return Bucket.builder().addLimit(limit).build();
        });
    }

    @PostMapping("/contact")
    public ResponseEntity<?> handleContact(@Valid @RequestBody ContactForm form, HttpServletRequest request) {
        String ip = request.getRemoteAddr();
        Bucket bucket = resolveBucket(ip);

        if (bucket.tryConsume(1)) {
            emailService.sendEmail(form.getEmail(), form.getName(), form.getMessage());
            return ResponseEntity.ok(Collections.singletonMap("message", "Email sent successfully"));
        } else {
            return ResponseEntity.status(HttpStatus.TOO_MANY_REQUESTS)
                    .body(Collections.singletonMap("error", "Too many requests. Try again later."));
        }
    }
}
