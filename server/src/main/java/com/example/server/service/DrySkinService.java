package com.example.server.service;

import com.example.server.model.DrySkin;
import org.springframework.http.HttpStatus;

public interface DrySkinService {
    Iterable<DrySkin> getAllDrySkin();
    DrySkin createDrySkin (DrySkin drySkin);
    DrySkin updateDrySkin(DrySkin drySkin);
    HttpStatus deleteDrySkin (Long id);
}
