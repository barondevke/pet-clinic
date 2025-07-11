package com.example.pet_clinic.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pet_clinic.service.UserService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;
    //Registers a new user
    @PostMapping("/signup")
    public String signup(@RequestBody AuthRequest request) {
        userService.register(request);
        return "User registered successfully";
    }
    //Authenticates a user
    @PostMapping("/signin")
    public String signin(@RequestBody AuthRequest request) {
        boolean success = userService.authenticate(request);
        return success ? "Login successful" : "Invalid credentials";
    }
}

