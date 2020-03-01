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
@CrossOrigin(origins = "http://localhost:4200")
public class UserController<T> {
    private final UserRepo userRepo;

    @Autowired
    public UserController(UserRepo userRepo) {
        this.userRepo = userRepo;
    }
    /*
     * // создание студентов первой группы Student ilya = new Student("Ilya",
     * "Pavlovskiy", 5); Student stas = new Student("Stas", "Baranov", 4); Student
     * vova = new Student("Vova", "Fomin", 5); // создание студентов второй группы
     * Student sasha = new Student("Sasha", "Klubkov", 4); Student dima = new
     * Student("Dima", "Ryabishkin", 5); Student anton = new Student("Anton",
     * "Antonov", 5); // создание первой группы StudentsGroup firstGroup = new
     * StudentsGroup(1, ilya, stas, vova); // создание второй группы StudentsGroup
     * secondGroup = new StudentsGroup(2 , sasha , dima , anton);
     */
    /*
     * User ilya = new User("Ilya", "Pavlovskiy", "pavl99@gmail.com", "admin",
     * "12345"); User stas = new User("Stas", "Baranov", "baranov99@gmail.com",
     * "stas", "1234"); User vova = new User("Vova", "Fomin", "fomin99@gmail.com",
     * "vova", "123");
     * 
     * private int counter = 4; private List<Map<String, T>> users = new
     * ArrayList<Map<String, T>>() {
     * 
     * { add(new HashMap<String, T>() {
     * 
     * { put("id", (T) "1"); put("user", (T) ilya); } });
     * 
     * add(new HashMap<String, T>() { { put("id", (T) "2"); put("user", (T) stas); }
     * });
     * 
     * add(new HashMap<String, T>() { { put("id", (T) "3"); put("user", (T) vova); }
     * });
     * 
     * }
     * 
     * };
     */

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
