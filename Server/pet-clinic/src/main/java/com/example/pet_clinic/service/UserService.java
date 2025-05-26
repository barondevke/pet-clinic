package com.example.pet_clinic.service;

import com.example.pet_clinic.model.User;
import com.example.pet_clinic.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired private UserRepository userRepository;

    public User register(String username, String password, String name) {
        if (userRepository.findByUsername(username).isPresent()) {
            throw new RuntimeException("Username already exists");
        }
    
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        user.setName(name); 
    
        return userRepository.save(user);
    }
    
    public boolean authenticate(String username, String password) {
        Optional<User> user = userRepository.findByUsername(username);
        return user.isPresent() && user.get().getPassword().equals(password);
    }
    
    }
