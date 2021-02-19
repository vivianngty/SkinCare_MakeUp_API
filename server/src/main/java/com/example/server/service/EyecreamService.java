package com.example.server.service;

import com.example.server.model.Eyecream;
import org.springframework.http.HttpStatus;

public interface EyecreamService {
    Iterable<Eyecream> getAllEyecream();
    Eyecream getEyecreamById(Long id);
    Eyecream createEyecream(Eyecream eyecream);
    Eyecream updateEyecream(Eyecream eyecream);
    HttpStatus deleteEyecream(Long id);
}
