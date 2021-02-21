package com.example.server.controller;

import com.example.server.model.SensitiveSkin;
import com.example.server.service.SensitiveSkinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/sensitiveskin")
public class SensitiveSkinController {
    @Autowired
    SensitiveSkinService sensitiveSkinService;

    @GetMapping
    public Iterable<SensitiveSkin> getAllSensitiveSkin(){
        return sensitiveSkinService.getAllSensitiveSkin();
    }

    @PostMapping
    public SensitiveSkin createSensitiveSkin(@RequestBody SensitiveSkin sensitiveSkin){
        return sensitiveSkinService.createSensitiveSkin(sensitiveSkin);
    }

    @PatchMapping
    public SensitiveSkin updateSensitiveSkin(@RequestBody SensitiveSkin sensitiveSkin){
        return  sensitiveSkinService.updateSensitiveSkin(sensitiveSkin);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteSensitiveSkin(@PathVariable Long id){
        return  sensitiveSkinService.deleteSensitiveSkin(id);
    }
}
