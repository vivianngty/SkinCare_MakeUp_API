package com.example.server.service;

import com.example.server.model.Serum;
import org.springframework.http.HttpStatus;

public interface SerumService {
    Iterable<Serum> getAllSerum();
    Serum getSerumById(Long id);
    Serum createSerum(Serum serum);
    Serum updateSerum(Serum serum);
    HttpStatus deleteSerum(Long id);
}
