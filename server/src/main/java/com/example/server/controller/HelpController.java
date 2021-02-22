package com.example.server.controller;

import com.example.server.model.Help;
import com.example.server.service.HelpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/help")
public class HelpController {
    @Autowired
    HelpService helpService;

    @GetMapping
    public Iterable<Help> getAllHelp(){
        return helpService.getAllHelp();
    }

    @PostMapping
    public Help createHelp(@RequestBody Help help){
        return helpService.createHelp(help);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteHelp (@PathVariable Long id){
        return helpService.deleteHelp(id);
    }
}
