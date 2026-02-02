package com.portfolio.backend.config;

import com.portfolio.backend.model.Project;
import com.portfolio.backend.repository.ProjectRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataLoader {

    @Bean
    CommandLineRunner initDatabase(ProjectRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                repository.save(new Project(null, "E-Commerce", "Microservices Engine", "url_here", "Java,Kafka", "#", "#"));
                repository.save(new Project(null, "Crypto Dashboard", "Real-time tracking", "url_here", "React,WebSockets", "#", "#"));
                System.out.println("Database seeded with projects.");
            }
        };
    }
}