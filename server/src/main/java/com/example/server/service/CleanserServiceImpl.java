package com.example.server.service;

import com.example.server.model.Cleanser;
import com.example.server.repository.CleanserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class CleanserServiceImpl implements CleanserService{

    @Autowired
    CleanserRepository cleanserRepository;

    @Override
    public Iterable<Cleanser> getAllCleanser() {
        return cleanserRepository.findAll();
    }

    @Override
    public Cleanser getCleanserById(Long id) {
        return cleanserRepository.findById(id).get();
    }

    @Override
    public Cleanser createCleanser(Cleanser cleanser) {
        return cleanserRepository.save(cleanser);
    }

    @Override
    public Cleanser updateCleanser(Cleanser cleanser) {
        return cleanserRepository.save(cleanser);
    }

    @Override
    public HttpStatus deleteCleanser(Long id) {
        cleanserRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
