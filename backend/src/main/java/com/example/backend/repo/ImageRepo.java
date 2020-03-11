package com.example.backend.repo;

import com.example.backend.domain.Image;
import org.springframework.data.jpa.repository.JpaRepository;
public interface ImageRepo extends JpaRepository<Image , Long> {

    
}
