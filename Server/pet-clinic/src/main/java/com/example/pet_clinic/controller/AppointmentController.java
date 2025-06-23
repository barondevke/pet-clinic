package com.example.pet_clinic.controller;

import com.example.pet_clinic.model.Appointment;
import com.example.pet_clinic.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @PostMapping
    public ResponseEntity<Appointment> create(@RequestBody Appointment appointment) {
        Appointment saved = appointmentService.createAppointment(appointment);
        return ResponseEntity.ok(saved);
    }

    
    @GetMapping("/status/{status}")
    public ResponseEntity<List<Appointment>> getAppointmentsByStatus(@PathVariable String status) {
        if (!status.equalsIgnoreCase("pending") && !status.equalsIgnoreCase("completed")) {
            return ResponseEntity.badRequest().build();
        }
        List<Appointment> results = appointmentService.getAppointmentsByStatus(status.toUpperCase());
        return ResponseEntity.ok(results);
    }

    // ✅ Mark appointment as completed
    @PutMapping("/{id}/complete")
    public ResponseEntity<Appointment> completeAppointment(@PathVariable Long id) {
        try {
            Appointment updated = appointmentService.completeAppointment(id);
            return ResponseEntity.ok(updated);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
<<<<<<< HEAD
=======
      
>>>>>>> be9e1d6cdc7e39bc6b9c664cfd5d73e75be20a4e
}
