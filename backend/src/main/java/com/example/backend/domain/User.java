package com.example.backend.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.ToString;

@Entity
@Table
@ToString(of = {"id" , "name" , "surname" ,  "email", "nickname" , "passw"})
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String surname;
    private String email;
    private String nickname;
    private String passw;

    public void setId(String id){
        this.id = id;
    }

    public Long getid() {
        return this.id;
    }
    public void setName(String name){
        this.name = name;
    }

    public String getName() {
        return this.name;
    }
    
    public void setSurname(String surname){
        this.surname = surname;
    }

    public String getSurname() {
        return this.surname;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public String getEmail() {
        return this.email;
    }

    public void setNickname(String nickname){
        this.nickname = nickname;
    }

    public String getNickname() {
        return this.nickname;
    }

    public void setPassw(String passw){
        this.passw = passw;
    }

    public String getPassw() {
        return this.passw;
    }

}