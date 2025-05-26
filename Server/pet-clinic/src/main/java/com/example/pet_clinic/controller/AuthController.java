package com.example.pet_clinic.controller;

import com.example.pet_clinic.model.AuthRequest;
import com.example.pet_clinic.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired private UserService userService;

    @PostMapping("/signup")
    public String signup(@RequestBody AuthRequest request) {
        userService.register(request.username, request.password,request.name);
        return "User registered successfully";
    }

    @PostMapping("/signin")
    public String signin(@RequestBody AuthRequest request) {
        boolean success = userService.authenticate(request.username, request.password);
        return success ? "Login successful" : "Invalid credentials";
    }
}
