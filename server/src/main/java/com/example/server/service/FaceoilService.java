package com.example.server.service;

import com.example.server.model.Faceoil;
import org.springframework.http.HttpStatus;

public interface FaceoilService {
    Iterable<Faceoil> getAllFaceoil();
    Faceoil getFaceoilById(Long id);
    Faceoil createFaceoil(Faceoil faceoil);
    Faceoil updateFaceoil(Faceoil faceoil);
    HttpStatus deleteFaceoil(Long id);
}
