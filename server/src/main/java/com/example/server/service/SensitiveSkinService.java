package com.example.server.service;

import com.example.server.model.SensitiveSkin;
import org.springframework.http.HttpStatus;

public interface SensitiveSkinService {
    Iterable<SensitiveSkin> getAllSensitiveSkin();
    SensitiveSkin createSensitiveSkin(SensitiveSkin sensitiveSkin);
    SensitiveSkin updateSensitiveSkin(SensitiveSkin sensitiveSkin);
    HttpStatus deleteSensitiveSkin(Long id);
}
