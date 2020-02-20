package com.example.backend;

class StudentsGroup {
    public int idGroup;
    public Student[] students = new Student[3];
    StudentsGroup(int idGroup , Student first , Student second  , Student third) {
        this.idGroup = idGroup;
        this.students[0] = first;
        this.students[1] = second;
        this.students[2] = third;
    }
}