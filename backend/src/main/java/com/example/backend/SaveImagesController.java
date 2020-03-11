package com.example.backend;

import java.util.List;

import com.example.backend.domain.SaveImages;
import com.example.backend.repo.SaveImagesRepo;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("saveImages")
public class SaveImagesController {
    private final SaveImagesRepo saveImagesRepo;

    @Autowired
    public SaveImagesController(SaveImagesRepo saveImagesRepo) {
        this.saveImagesRepo = saveImagesRepo;
    }


    @GetMapping
    public List<SaveImages> greeting() {
        return saveImagesRepo.findAll();
    }

    @GetMapping("{id}")
    public SaveImages getUserById(@PathVariable("id") SaveImages saveImages) {
        return saveImages;
    }

    /*
     * @GetMapping("{nickname}") public Map<String, T>
     * getUserByNickname(@PathVariable String nickname) { return users.stream()
     * .filter(user -> ((List<Map<String, T>>) user.get("users")).get(1)
     * .equals(nickname)) .findFirst() .orElseThrow(NotFoundException::new); }
     */

    @PostMapping
    public SaveImages create(@RequestBody SaveImages saveImages) {
        return saveImagesRepo.save(saveImages);
    }
    
    @PutMapping("{id}")
    public SaveImages update(
        @PathVariable("id") SaveImages saveImagesFromDb, 
        @RequestBody SaveImages saveImages) {
        BeanUtils.copyProperties(saveImages, saveImagesFromDb, "id");
        return saveImagesRepo.save(saveImages);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") SaveImages saveImages) {
        saveImagesRepo.delete(saveImages);
    }
}
