package com.example.server.service;

import com.example.server.model.DrySkin;
import com.example.server.repository.DrySkinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class DrySkinServiceImpl implements DrySkinService{
    @Autowired
    DrySkinRepository drySkinRepository;

    @Override
    public Iterable<DrySkin> getAllDrySkin() {
        return drySkinRepository.findAll();
    }

    @Override
    public DrySkin createDrySkin(DrySkin drySkin) {
        return drySkinRepository.save(drySkin);
    }

    @Override
    public DrySkin updateDrySkin(DrySkin drySkin) {
        return drySkinRepository.save(drySkin);
    }

    @Override
    public HttpStatus deleteDrySkin(Long id) {
        drySkinRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
