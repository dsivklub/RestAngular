package com.example.backend.repo;

import java.util.List;
import com.example.backend.domain.ImageLikes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageLikesRepo extends JpaRepository<ImageLikes, Long> {

}