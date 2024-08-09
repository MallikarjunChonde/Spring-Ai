package com.arjun.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.arjun.model.VIPRequest;

@EnableJpaRepositories
public interface VIPRequestRepository extends JpaRepository<VIPRequest, Long> {

}
