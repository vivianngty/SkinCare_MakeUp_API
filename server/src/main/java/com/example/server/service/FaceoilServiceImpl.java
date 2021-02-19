package com.example.server.service;

import com.example.server.model.Faceoil;
import com.example.server.repository.FaceoilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class FaceoilServiceImpl implements FaceoilService{
    @Autowired
    FaceoilRepository faceoilRepository;

    @Override
    public Iterable<Faceoil> getAllFaceoil() {
        return faceoilRepository.findAll();
    }

    @Override
    public Faceoil getFaceoilById(Long id) {
        return faceoilRepository.findById(id).get();
    }

    @Override
    public Faceoil createFaceoil(Faceoil faceoil) {
        return faceoilRepository.save(faceoil);
    }

    @Override
    public Faceoil updateFaceoil(Faceoil faceoil) {
        return faceoilRepository.save(faceoil);
    }

    @Override
    public HttpStatus deleteFaceoil(Long id) {
        faceoilRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
