package com.example.backend.domain;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OrderBy;
import javax.persistence.Table;
// import lombok.ToString;

@Entity
@Table(name = "foto_likes")
// @ToString(of = {"id" , "save_foto"})
public class ImageLikes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idFoto;
    private int number_likes;

    public void setIdFoto(Long idFoto) {
        this.idFoto = idFoto;
    }

    public Long getIdFoto() {
        return this.idFoto;
    }

    public void setNumberLikes(int number_likes) {
        this.number_likes = number_likes;
    }

    public int getNumberLikes() {
        return this.number_likes;
    }
}