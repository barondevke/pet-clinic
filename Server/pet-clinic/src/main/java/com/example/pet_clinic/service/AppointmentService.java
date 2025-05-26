package com.example.pet_clinic.service;

import com.example.pet_clinic.model.Appointment;
import com.example.pet_clinic.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    public Appointment createAppointment(Appointment appointment) {
        
        return appointmentRepository.save(appointment);
    }
}


