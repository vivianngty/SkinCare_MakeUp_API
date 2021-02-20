package com.example.server.service;


import com.example.server.model.OilySkin;
import org.springframework.http.HttpStatus;

public interface OilySkinService {
    Iterable<OilySkin> getAllOilySkin();
    OilySkin createOilySkin (OilySkin oilySkin);
    OilySkin updateOilySkin(OilySkin oilySkin);
    HttpStatus deleteOilySkin (Long id);
}
