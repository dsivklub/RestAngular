package com.example.backend.repo;

import com.example.backend.domain.Avatar;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AvatarRepo extends JpaRepository<Avatar, Long> {

}