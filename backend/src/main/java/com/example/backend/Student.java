package com.example.backend;

public class Student {
    private String name;
    private String surname;
    private int assessment;

    Student(String name , String surname , int assessment) {
        this.name = name;
        this.surname = surname;
        this.assessment = assessment;
    }
    public String getName() {
        return this.name;
    }

    public String getSurname() {
        return this.surname;
    }

    public int getAssessment() {
        return this.assessment;
    }

}