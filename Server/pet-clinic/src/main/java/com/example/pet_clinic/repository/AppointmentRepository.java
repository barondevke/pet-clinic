package com.example.pet_clinic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.pet_clinic.model.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
}

