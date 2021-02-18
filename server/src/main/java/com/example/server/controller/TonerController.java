package com.example.server.controller;


import com.example.server.model.Cleanser;
import com.example.server.model.Toner;
import com.example.server.service.TonerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/toner")
public class TonerController {
    @Autowired
    TonerService tonerService;

    @GetMapping
    public Iterable<Toner> getAllToner(){
        return tonerService.getAllToner();
    }

    @PostMapping
    public Toner createToner(@RequestBody Toner toner){
        return tonerService.createToner(toner);
    }

    @PatchMapping
    public Toner updateToner(@RequestBody Toner toner){
        return tonerService.updateToner(toner);
    }

    @DeleteMapping ("/{id}")
    public HttpStatus deleteTonerById(@PathVariable Long id){
        return tonerService.deleteToner(id);
    }
}
