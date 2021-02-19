package com.example.server.service;

import com.example.server.model.Serum;
import com.example.server.repository.SerumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class SerumServiceImpl implements SerumService{

    @Autowired
    SerumRepository serumRepository;

    @Override
    public Iterable<Serum> getAllSerum() {
        return serumRepository.findAll();
    }

    @Override
    public Serum getSerumById(Long id) {
        return serumRepository.findById(id).get();
    }

    @Override
    public Serum createSerum(Serum serum) {
        return serumRepository.save(serum);
    }

    @Override
    public Serum updateSerum(Serum serum) {
        return serumRepository.save(serum);
    }

    @Override
    public HttpStatus deleteSerum(Long id) {
        serumRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
