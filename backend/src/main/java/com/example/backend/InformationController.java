package com.example.backend;

import java.util.List;

import com.example.backend.domain.Information;
import com.example.backend.repo.InformationRepo;

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
@RequestMapping("usersInformation")
@CrossOrigin(origins = "http://localhost:4200")
public class InformationController {
    private final InformationRepo informationRepo;

    @Autowired
    public InformationController(InformationRepo informationRepo) {
        this.informationRepo = informationRepo;
    }

    @GetMapping
    public List<Information> greeting() {
        return informationRepo.findAll();
    }

    @GetMapping("{id}")
    public Information getUserById(@PathVariable("id") Information information) {
        return information;
    }

    @PostMapping
    public Information create(@RequestBody Information information) {
        return informationRepo.save(information);
    }

    @PutMapping("{id}")
    public Information update(
        @PathVariable("id") Information informationFromDb, 
        @RequestBody Information information) {
        BeanUtils.copyProperties(information, informationFromDb, "id");
        return informationRepo.save(information);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Information information) {
        informationRepo.delete(information);
    }
}