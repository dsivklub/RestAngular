package com.example.backend.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "additional_information")
public class Information {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String userFotoInfo;
    String userInfo;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getid() {
        return this.id;
    }

    public void setUserFotoInformation(String userFotoInfo) {
        this.userFotoInfo = userFotoInfo;
    }

    public String getUserFotoInformation() {
        return this.userFotoInfo;
    }
    public void setUserInformation(String userInfo) {
        this.userInfo = userInfo;
    }

    public String getUserInformation() {
        return this.userInfo;
    }
}