package com.example.pet_clinic.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.pet_clinic.controller.AuthRequest;
import com.example.pet_clinic.model.User;
import com.example.pet_clinic.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User register(AuthRequest request) {
        if (userRepository.findByUsername(request.username).isPresent()) {
            throw new RuntimeException("Username already exists");
        }

        User user = new User();
        user.setUsername(request.username);
        user.setPassword(request.password); // In production, hash this!
        user.setName(request.name);

        return userRepository.save(user);
    }

    public boolean authenticate(AuthRequest request) {
        return userRepository.findByUsername(request.username)
                .map(u -> u.getPassword().equals(request.password))
                .orElse(false);
    }
}
