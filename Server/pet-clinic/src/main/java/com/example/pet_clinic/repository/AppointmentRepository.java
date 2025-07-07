package com.example.pet_clinic.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.pet_clinic.model.Appointment;

//Liskov Substitution Principle (LSP) is applied here by ensuring that the AppointmentRepository can be used interchangeably with any of its subtypes, if any were to exist in the future.
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByStatus(String status);

}



