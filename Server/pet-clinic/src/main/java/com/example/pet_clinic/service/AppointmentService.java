package com.example.pet_clinic.service;

import com.example.pet_clinic.model.Appointment;
import com.example.pet_clinic.repository.AppointmentRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    public Appointment createAppointment(Appointment appointment) {
        
        return appointmentRepository.save(appointment);
    }

    public Appointment completeAppointment(Long id) {
        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Appointment not found with id: " + id));
    
        if (!"pending".equalsIgnoreCase(appointment.getStatus())) {
            throw new IllegalStateException("Only pending appointments can be marked as completed.");
        }
    
        appointment.setStatus("completed");
        return appointmentRepository.save(appointment);
    }

    public List<Appointment> getAppointmentsByStatus(String status) {
        return appointmentRepository.findByStatus(status.toUpperCase());
    }
    
    
    
}


