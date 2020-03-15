package com.example.backend;


import java.util.List;

import com.example.backend.domain.Avatar;
import com.example.backend.repo.AvatarRepo;

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
@RequestMapping("usersAvatars")
@CrossOrigin(origins = "http://localhost:4200")
public class AvatarController {
    private final AvatarRepo avatarRepo;

    @Autowired
    public AvatarController(AvatarRepo avatarRepo) {
        this.avatarRepo = avatarRepo;
    }

    @GetMapping
    public List<Avatar> greeting() {
        return avatarRepo.findAll();
    }

    @GetMapping("{id}")
    public Avatar getUserById(@PathVariable("id") Avatar avatar) {
        return avatar;
    }

    @PostMapping
    public Avatar create(@RequestBody Avatar avatar) {
        return avatarRepo.save(avatar);
    }

    @PutMapping("{id}")
    public Avatar update(
        @PathVariable("id") Avatar avatarFromDb, 
        @RequestBody Avatar avatar) {
        BeanUtils.copyProperties(avatar, avatarFromDb, "id");
        return avatarRepo.save(avatar);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Avatar avatar) {
        avatarRepo.delete(avatar);
    }
}