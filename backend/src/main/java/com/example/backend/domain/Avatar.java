package com.example.backend.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



import lombok.ToString;

@Entity
@Table(name = "avatars")
// @ToString(of = { id" , "src" , "id"})
public class Avatar {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String avatar;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getid() {
        return this.id;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getAvatar() {
        return this.avatar;
    }


}