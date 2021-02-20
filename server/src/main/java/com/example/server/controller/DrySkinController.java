package com.example.server.controller;

import com.example.server.model.DrySkin;
import com.example.server.service.DrySkinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/dryskin")
public class DrySkinController {
    @Autowired
    DrySkinService drySkinService;

    @GetMapping
    public Iterable<DrySkin> getAllDrySkin(){
        return drySkinService.getAllDrySkin();
    }

    @PostMapping
    public DrySkin createDrySkin ( @RequestBody DrySkin drySkin){
        return drySkinService.createDrySkin(drySkin);
    }

    @PatchMapping
    public DrySkin updateDrySkin (@RequestBody DrySkin drySkin){
        return  drySkinService.updateDrySkin(drySkin);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteDrySkin (@PathVariable Long id){
        return drySkinService.deleteDrySkin(id);
    }
}
