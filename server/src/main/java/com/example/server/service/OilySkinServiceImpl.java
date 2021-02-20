package com.example.server.service;

import com.example.server.model.OilySkin;
import com.example.server.repository.OilySkinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class OilySkinServiceImpl implements OilySkinService{
    @Autowired
    OilySkinRepository oilySkinRepository;

    @Override
    public Iterable<OilySkin> getAllOilySkin() {
        return oilySkinRepository.findAll();
    }

    @Override
    public OilySkin createOilySkin(OilySkin oilySkin) {
        return oilySkinRepository.save(oilySkin);
    }

    @Override
    public OilySkin updateOilySkin(OilySkin oilySkin) {
        return oilySkinRepository.save(oilySkin);
    }

    @Override
    public HttpStatus deleteOilySkin(Long id) {
        oilySkinRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
