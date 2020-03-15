package com.example.backend.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



import lombok.ToString;

@Entity
@Table(name = "foto")
// @ToString(of = {"id_foto" , "src" , "id"})
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id_foto;

    //@Column(name = "img", columnDefinition="BLOB")
    private String src;

    //@Column(name = "id" , columnDefinition = "text" )

    Integer id;

    public void setIdFoto(Long id_foto) {
        this.id_foto = id_foto;
    }

    public Long getidFoto() {
        return this.id_foto;
    }

    public void setSrc(String src) {
        this.src = src;
    }

    public String getSrc() {
        return this.src;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getid() {
        return this.id;
    }

}