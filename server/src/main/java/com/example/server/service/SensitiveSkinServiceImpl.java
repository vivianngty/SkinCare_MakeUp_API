package com.example.server.service;

import com.example.server.model.SensitiveSkin;
import com.example.server.repository.SensitiveSkinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class SensitiveSkinServiceImpl implements SensitiveSkinService{
    @Autowired
    SensitiveSkinRepository sensitiveSkinRepository;

    @Override
    public Iterable<SensitiveSkin> getAllSensitiveSkin() {
        return sensitiveSkinRepository.findAll();
    }

    @Override
    public SensitiveSkin createSensitiveSkin(SensitiveSkin sensitiveSkin) {
        return sensitiveSkinRepository.save(sensitiveSkin);
    }

    @Override
    public SensitiveSkin updateSensitiveSkin(SensitiveSkin sensitiveSkin) {
        return sensitiveSkinRepository.save(sensitiveSkin);
    }

    @Override
    public HttpStatus deleteSensitiveSkin(Long id) {
        sensitiveSkinRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
