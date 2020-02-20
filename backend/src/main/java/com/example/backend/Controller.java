package com.example.backend;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    Student ilya = new Student("Ilya", "Pavlovskiy", 5);
    Student stas = new Student("Stas", "Baranov", 4);
    Student vova = new Student("Vova", "Fomin", 5);

    Student sasha = new Student("Sasha", "Klubkov", 4);
    Student dima = new Student("Dima", "Ryabishkin", 5);
    Student anton = new Student("Anton", "Antonov", 5);
    StudentsGroup firstGroup = new StudentsGroup(1, ilya, stas, vova);

    StudentsGroup secondGroup = new StudentsGroup(2 , sasha , dima , anton);

    @RequestMapping("/greeting")
    public StudentsGroup greeting() {
        return firstGroup;
    }

    @RequestMapping("/greeting2")
    public StudentsGroup secondGroup() {
        return secondGroup;
    }

}
