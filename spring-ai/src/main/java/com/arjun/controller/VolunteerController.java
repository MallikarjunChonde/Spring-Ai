package com.arjun.controller;

import com.arjun.model.VIPRequest;
import com.arjun.model.Volunteer;
import com.arjun.repository.VolunteerRepository;
import com.arjun.service.VolunteerService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class VolunteerController {

    @Autowired
    private VolunteerRepository volunteerRepository;

    @Autowired
    private VolunteerService volunteerService;

    @PostMapping("/register")
    public ResponseEntity<Volunteer> registerVolunteer(@RequestBody Volunteer volunteer) {
        Volunteer savedVolunteer = volunteerRepository.save(volunteer);
        return ResponseEntity.ok(savedVolunteer);
    }

    @PostMapping("/find-volunteers")
    public ResponseEntity<List<Volunteer>> findVolunteersByRequest(@RequestBody VIPRequest vipRequest) {
        List<Volunteer> matchingVolunteers = volunteerService.matchingVolunteers(
            vipRequest.getDate(),
            vipRequest.getTime(),
            vipRequest.getPostalCode(),
            vipRequest.getPreference()
        );
        return ResponseEntity.ok(matchingVolunteers);
    }
   
}