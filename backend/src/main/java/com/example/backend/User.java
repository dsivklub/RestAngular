package com.example.backend;

public class User {
    private String name;
    private String surname;
    private String email;
    private String nickname;
    private String passw;

    User (String name , String surname , String email, String nickname , String passw) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.nickname = nickname;
        this.passw = passw;
    }
    
    public String getName() {
        return this.name;
    }
    public void setName(String name) {
        this.name = name;
    } 
    public String getSurname() {
        return this.surname;
    }
    public void setSurname(String surname) {
        this.surname = surname;
    } 
    public String getEmail() {
        return this.email;
    }
    public void setEmail(String email) {
        this.email = email;
    } 
    public String getNickname() {
        return this.nickname;
    }
    public void setNickname(String nickname) {
        this.nickname = nickname;
    } 
    public String getPassw() {
        return this.passw;
    }
    public void setPassw(String passw) {
        this.passw = passw;
    } 
    


}