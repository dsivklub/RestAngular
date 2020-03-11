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
@Table(name = "user_save_foto")
// @ToString(of = {"id" , "save_foto"})
public class SaveImages {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // @Column(name = "id")
    // @OrderBy("firstName asc")
    private Long id;
    // @Column(name = "save_foto", columnDefinition = "integer[]")
    //private List<Integer> save_foto;;
    private String save_foto;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getid() {
        return this.id;
    }

    public void setSaveFoto(String save_foto) {
        this.save_foto = save_foto;
    }

    public String getSaveFoto() {
        return this.save_foto;
    }
}