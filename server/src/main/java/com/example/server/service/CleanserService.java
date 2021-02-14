package com.example.server.service;

import com.example.server.model.Cleanser;
import org.springframework.http.HttpStatus;

public interface CleanserService {
    Iterable<Cleanser> getAllCleanser();
    Cleanser getCleanserById(Long id);
    Cleanser createCleanser(Cleanser cleanser);
    Cleanser updateCleanser(Cleanser cleaner);
    HttpStatus deleteCleanser(Long id);
}
