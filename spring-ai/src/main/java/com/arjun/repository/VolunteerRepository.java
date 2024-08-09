package com.arjun.repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.arjun.model.Volunteer;

public interface VolunteerRepository extends JpaRepository<Volunteer, Long>{
	
    List<Volunteer> findByAvailability(String availability);

    List<Volunteer> findByPostcode(String postcode);

    }
