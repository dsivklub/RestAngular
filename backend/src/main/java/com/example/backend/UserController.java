package com.example.backend;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.example.backend.domain.User;
import com.example.backend.exception.NotFoundException;
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
@RequestMapping("users")
// @CrossOrigin(origins = "http://localhost:4200")
//  @CrossOrigin(origins = "http://localhost:4200/userpage/yourPage")
public class UserController {
    private final UserRepo userRepo;

    @Autowired
    public UserController(UserRepo userRepo) {
        this.userRepo = userRepo;
    }


    @GetMapping
    public List<User> greeting() {
        return userRepo.findAll();
    }

    @GetMapping("{id}")
    public User getUserById(@PathVariable("id") User user) {
        return user;
    }

    /*
     * @GetMapping("{nickname}") public Map<String, T>
     * getUserByNickname(@PathVariable String nickname) { return users.stream()
     * .filter(user -> ((List<Map<String, T>>) user.get("users")).get(1)
     * .equals(nickname)) .findFirst() .orElseThrow(NotFoundException::new); }
     */

    @PostMapping
    public User create(@RequestBody User user) {
        return userRepo.save(user);
    }
    
    @PutMapping("{id}")
    public User update(
        @PathVariable("id") User userFromDb, 
        @RequestBody User user) {
        BeanUtils.copyProperties(user, userFromDb, "id");
        return userRepo.save(user);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") User user) {
        userRepo.delete(user);
    }
}
