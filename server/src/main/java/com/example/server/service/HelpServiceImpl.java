package com.example.server.service;

import com.example.server.model.Help;
import com.example.server.repository.HelpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class HelpServiceImpl implements HelpService{
    @Autowired
    HelpRepository helpRepository;

    @Override
    public Iterable<Help> getAllHelp() {
        return helpRepository.findAll();
    }

    @Override
    public Help createHelp(Help help) {
        return helpRepository.save(help);
    }

    @Override
    public HttpStatus deleteHelp(Long id) {
        helpRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
