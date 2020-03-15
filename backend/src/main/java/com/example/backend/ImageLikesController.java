package com.example.backend;


import java.util.List;


import com.example.backend.domain.ImageLikes;
import com.example.backend.repo.ImageLikesRepo;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("imagelikes")
@CrossOrigin(origins = "http://localhost:4200")
public class ImageLikesController {
    private final ImageLikesRepo imageLikesRepo;

    @Autowired
    public ImageLikesController(ImageLikesRepo imageLikesRepo) {
        this.imageLikesRepo = imageLikesRepo;
    }

    @GetMapping
    public List<ImageLikes> greeting() {
        return imageLikesRepo.findAll();
    }

    @GetMapping("{id}")
    public ImageLikes getUserById(@PathVariable("id") ImageLikes imageLikes) {
        return imageLikes;
    }

    
    @PostMapping
    public ImageLikes create(@RequestBody ImageLikes imageLikes) {
        return imageLikesRepo.save(imageLikes);
    }

    @PutMapping("{id}")
    public ImageLikes update(
        @PathVariable("id") ImageLikes imageLikesFromDb, 
        @RequestBody ImageLikes imageLikes) {
        BeanUtils.copyProperties(imageLikes, imageLikesFromDb, "id");
        return imageLikesRepo.save(imageLikes);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") ImageLikes imageLikes) {
        imageLikesRepo.delete(imageLikes);
    }
}