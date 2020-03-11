package com.example.backend;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.example.backend.domain.Image;
import com.example.backend.domain.ImageLikes;
import com.example.backend.repo.ImageLikesRepo;
import com.example.backend.repo.ImageRepo;

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

    /*
     * @GetMapping("{nickname}") public Map<String, T>
     * getUserByNickname(@PathVariable String nickname) { return users.stream()
     * .filter(user -> ((List<Map<String, T>>) user.get("users")).get(1)
     * .equals(nickname)) .findFirst() .orElseThrow(NotFoundException::new); }
     */

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