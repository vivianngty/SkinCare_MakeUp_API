package com.example.server.service;

import com.example.server.model.Eyecream;
import com.example.server.repository.EyecreamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class EyecreamServiceImpl implements EyecreamService{

    @Autowired
    EyecreamRepository eyecreamRepository;

    @Override
    public Iterable<Eyecream> getAllEyecream() {
        return eyecreamRepository.findAll();
    }

    @Override
    public Eyecream getEyecreamById(Long id) {
        return eyecreamRepository.findById(id).get();
    }

    @Override
    public Eyecream createEyecream(Eyecream eyecream) {
        return eyecreamRepository.save(eyecream);
    }

    @Override
    public Eyecream updateEyecream(Eyecream eyecream) {
        return eyecreamRepository.save(eyecream);
    }

    @Override
    public HttpStatus deleteEyecream(Long id) {
        eyecreamRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
