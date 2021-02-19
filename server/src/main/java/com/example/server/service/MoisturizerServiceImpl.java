package com.example.server.service;

import com.example.server.model.Moisturizer;
import com.example.server.repository.MoisturizerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;


@Service
public class MoisturizerServiceImpl implements MoisturizerService{

    @Autowired
    MoisturizerRepository moisturizerRepository;

    @Override
    public Iterable<Moisturizer> getAllMoisturizer() {
        return moisturizerRepository.findAll();
    }

    @Override
    public Moisturizer getMoisturizerById(Long id) {
        return moisturizerRepository.findById(id).get();
    }

    @Override
    public Moisturizer createMoisturizer(Moisturizer moisturizer) {
        return moisturizerRepository.save(moisturizer);
    }

    @Override
    public Moisturizer updateMoisturizer(Moisturizer moisturizer) {
        return moisturizerRepository.save(moisturizer);
    }

    @Override
    public HttpStatus deleteMoisturizer(Long id) {
        moisturizerRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
