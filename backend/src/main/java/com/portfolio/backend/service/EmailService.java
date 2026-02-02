package com.portfolio.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendEmail(String fromEmail, String subject, String body) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("tanmaypatil.dev@gmail.com"); // Authenticated sender
        message.setTo("tanmaypatil.dev@gmail.com");   // Where you want to receive it
        message.setSubject("Portfolio Contact: " + subject);
        message.setText("From: " + fromEmail + "\n\nMessage:\n" + body);

        mailSender.send(message);
    }
}