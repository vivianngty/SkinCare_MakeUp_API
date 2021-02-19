package com.example.server.controller;

import com.example.server.model.Cleanser;
import com.example.server.model.Eyecream;
import com.example.server.service.EyecreamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/eyecream")
public class EyecreamController {
    @Autowired
    EyecreamService eyecreamService;

    @GetMapping
    public Iterable<Eyecream> getAllEyecream(){
        return eyecreamService.getAllEyecream();
    }

    @PostMapping
    public Eyecream createEyecream(@RequestBody Eyecream eyecream){
        return eyecreamService.createEyecream(eyecream);
    }

    @PatchMapping
    public Eyecream updateEyecream(@RequestBody Eyecream eyecream){
        return eyecreamService.updateEyecream(eyecream);
    }

    @DeleteMapping ("/{id}")
    public HttpStatus deleteEyecreamById (@PathVariable Long id){
        return eyecreamService.deleteEyecream(id);
    }

}
