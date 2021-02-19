package com.example.server.service;


import com.example.server.model.Moisturizer;
import org.springframework.http.HttpStatus;

public interface MoisturizerService {
    Iterable<Moisturizer> getAllMoisturizer();
    Moisturizer getMoisturizerById(Long id);
    Moisturizer createMoisturizer(Moisturizer moisturizer);
    Moisturizer updateMoisturizer(Moisturizer moisturizer);
    HttpStatus deleteMoisturizer(Long id);
}
