package com.example.pet_clinic.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.pet_clinic.model.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByStatus(String status);

}



