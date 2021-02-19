package com.example.server.controller;


import com.example.server.model.Faceoil;
import com.example.server.service.FaceoilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping ("/faceoil")
public class FaceoilController {

    @Autowired
    FaceoilService faceoilService;

    @GetMapping
    public Iterable<Faceoil> getAllFaceoil(){
        return faceoilService.getAllFaceoil();
    }

    @PostMapping
    public Faceoil createFaceoil(@RequestBody Faceoil faceoil){
        return faceoilService.createFaceoil(faceoil);
    }

    @PatchMapping
    public Faceoil updateFaceoil(@RequestBody Faceoil faceoil){
        return faceoilService.updateFaceoil(faceoil);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteFaceoil(@PathVariable Long id){
        return faceoilService.deleteFaceoil(id);
    }

}
