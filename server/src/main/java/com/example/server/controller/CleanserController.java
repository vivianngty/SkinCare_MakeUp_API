package com.example.server.controller;


import com.example.server.model.Cleanser;
import com.example.server.service.CleanserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/cleansers")

public class CleanserController {

    @Autowired
    CleanserService cleanserService;

    @GetMapping
    public Iterable<Cleanser> getAllCleanser(){
        return cleanserService.getAllCleanser();
    }

    @GetMapping("/{id}")
    public Cleanser getCleanserById(@PathVariable Long id){
        return cleanserService.getCleanserById(id);
    }

    @PostMapping
    public Cleanser createCleanser(@RequestBody Cleanser cleanser){
        return cleanserService.createCleanser(cleanser);
    }

    @PatchMapping
    public Cleanser updateCleanser(@RequestBody Cleanser cleanser){
        return cleanserService.updateCleanser(cleanser);
    }

    @DeleteMapping ("/{id}")
    public HttpStatus deleteCleanserById(@PathVariable Long id){
        return cleanserService.deleteCleanser(id);
    }


}
