package com.example.server.service;

import com.example.server.model.Cleanser;
import com.example.server.model.Toner;
import org.springframework.http.HttpStatus;

public interface TonerService {
        Iterable<Toner> getAllToner();
        Toner getTonerById(Long id);
        Toner createToner(Toner toner);
        Toner updateToner(Toner toner);
        HttpStatus deleteToner(Long id);


}
