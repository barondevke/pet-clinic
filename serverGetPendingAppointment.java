//for the endpoint status in the appointment
@Column(name = "status", nullable = false)
private String status;

public String getStatus() {
    return status;
}

public void setStatus(String status) {
    this.status = status;
}

//repository interface 

package com.example.pet_clinic.repository;

import com.example.pet_clinic.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByStatus(String status);
}
//controller endpoint 
package com.example.pet_clinic.controller;

import com.example.pet_clinic.model.Appointment;
import com.example.pet_clinic.service.AppointmentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    private final AppointmentService appointmentService;

    public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }

    @GetMapping("/pending")
    public List<Appointment> getPendingAppointments() {
        return appointmentService.getPendingAppointments();
    }
}
