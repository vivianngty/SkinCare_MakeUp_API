package com.example.server.controller;

import com.example.server.model.Moisturizer;
import com.example.server.service.MoisturizerService;
import com.example.server.service.SerumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/moisturizer")
public class MoisturizerController {

    @Autowired
    MoisturizerService moisturizerService;

    @GetMapping
    public Iterable<Moisturizer> getAllMoisturizer(){
        return moisturizerService.getAllMoisturizer();
    }

    @GetMapping("/{id}")
    public Moisturizer getMoisturizerById(@PathVariable Long id){
        return moisturizerService.getMoisturizerById(id);
    }

    @PostMapping
    public Moisturizer createMoisturizer(@RequestBody Moisturizer moisturizer){
        return moisturizerService.createMoisturizer(moisturizer);
    }

    @PatchMapping
    public Moisturizer updateMoisturizer(@RequestBody Moisturizer moisturizer){
        return moisturizerService.updateMoisturizer(moisturizer);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteMoisturizer(@PathVariable Long id){
        return moisturizerService.deleteMoisturizer(id);
    }
}
