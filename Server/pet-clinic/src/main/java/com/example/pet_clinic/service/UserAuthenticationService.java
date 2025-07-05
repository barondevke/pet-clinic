package com.example.pet_clinic.service;

import com.example.pet_clinic.controller.AuthRequest;

public interface UserAuthenticationService {
    boolean authenticate(AuthRequest request);
}
