package com.example.backend;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.example.backend.domain.Image;
import com.example.backend.domain.User;
import com.example.backend.exception.NotFoundException;
import com.example.backend.repo.ImageRepo;
import com.example.backend.repo.UserRepo;

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
@RequestMapping("image")
@CrossOrigin(origins = "http://localhost:4200")
public class ImageController {
    private final ImageRepo imageRepo;

    @Autowired
    public ImageController(ImageRepo imageRepo) {
        this.imageRepo = imageRepo;
    }

    @GetMapping
    public List<Image> greeting() {
        return imageRepo.findAll();
    }

    @GetMapping("{id}")
    public Image getUserById(@PathVariable("id") Image image) {
        return image;
    }

    /*
     * @GetMapping("{nickname}") public Map<String, T>
     * getUserByNickname(@PathVariable String nickname) { return users.stream()
     * .filter(user -> ((List<Map<String, T>>) user.get("users")).get(1)
     * .equals(nickname)) .findFirst() .orElseThrow(NotFoundException::new); }
     */

    @PostMapping
    public Image create(@RequestBody Image image) {
        return imageRepo.save(image);
    }

    @PutMapping("{id}")
    public Image update(
        @PathVariable("id") Image imageFromDb, 
        @RequestBody Image image) {
        BeanUtils.copyProperties(image, imageFromDb, "id");
        return imageRepo.save(image);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Image image) {
        imageRepo.delete(image);
    }
}