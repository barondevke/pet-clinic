package com.example.pet_clinic.service;

import com.example.pet_clinic.controller.AuthRequest;
import com.example.pet_clinic.model.User;

public interface UserRegistrationService {
    User register(AuthRequest request);
}
