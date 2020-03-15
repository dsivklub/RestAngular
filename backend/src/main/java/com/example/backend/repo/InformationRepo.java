package com.example.backend.repo;


import com.example.backend.domain.Information;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InformationRepo extends JpaRepository<Information , Long> {

    
}