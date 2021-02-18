package com.example.server.service;

import com.example.server.model.Cleanser;
import com.example.server.model.Toner;
import com.example.server.repository.TonerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class TonerServiceImpl implements TonerService {

    @Autowired
    TonerRepository tonerRepository;


    @Override
    public Iterable<Toner> getAllToner() {
        return tonerRepository.findAll();
    }

    @Override
    public Toner getTonerById(Long id) {
        return tonerRepository.findById(id).get();
    }

    @Override
    public Toner createToner(Toner toner) {
        return tonerRepository.save(toner);
    }

    @Override
    public Toner updateToner(Toner toner) {
        return tonerRepository.save(toner);
    }

    @Override
    public HttpStatus deleteToner(Long id) {
        tonerRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
