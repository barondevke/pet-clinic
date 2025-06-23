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

    @PostMapping("/signup")
    public String signup(@RequestBody AuthRequest request) {
        userService.register(request);
        return "User registered successfully";
    }

    @PostMapping("/signin")
    public String signin(@RequestBody AuthRequest request) {
        boolean success = userService.authenticate(request);
        return success ? "Login successful" : "Invalid credentials";
    }
<<<<<<< HEAD
}
=======
}

>>>>>>> 62d7034db8f7064ab6d5ed36d1c8cdb6939814bb
