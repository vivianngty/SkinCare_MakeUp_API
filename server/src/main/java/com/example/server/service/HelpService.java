package com.example.server.service;

import com.example.server.model.Help;
import org.springframework.http.HttpStatus;

public interface HelpService {
    Iterable<Help> getAllHelp();
    Help createHelp(Help help);
    HttpStatus deleteHelp(Long id);
}
