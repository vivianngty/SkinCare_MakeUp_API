package com.example.server.controller;


import com.example.server.model.Serum;
import com.example.server.service.SerumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/serum")
public class SerumController {

    @Autowired
    SerumService serumService;

    @GetMapping
    public Iterable<Serum> getAllSerum(){
        return serumService.getAllSerum();
    }

    @PostMapping
    public Serum createSerum(@RequestBody Serum serum){
        return serumService.createSerum(serum);
    }

    @PatchMapping
    public Serum updateSerum(@RequestBody Serum serum){
        return serumService.updateSerum(serum);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteSerum(@PathVariable Long id){
        return serumService.deleteSerum(id);
    }
}
