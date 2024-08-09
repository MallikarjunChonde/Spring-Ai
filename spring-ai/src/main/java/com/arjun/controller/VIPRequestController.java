package com.arjun.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arjun.repository.VIPRequestRepository;

@RestController
@RequestMapping("/api/v1/requests")
public class VIPRequestController {

    @Autowired
    private VIPRequestRepository vipRequestRepository;

}