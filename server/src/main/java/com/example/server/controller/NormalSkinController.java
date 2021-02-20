package com.example.server.controller;

import com.example.server.model.NormalSkin;
import com.example.server.service.NormalSkinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/normalskin")
public class NormalSkinController {

    @Autowired
    NormalSkinService normalSkinService;

    @GetMapping
    public Iterable<NormalSkin> getAllNormalSkin(){
        return normalSkinService.getAllNormalSkin();
    }

    @PostMapping
    public NormalSkin createNormalSkin ( @RequestBody NormalSkin normalSkin){
        return normalSkinService.createNormalSkin(normalSkin);
    }

    @PatchMapping
    public NormalSkin updateNormalSkin (@RequestBody NormalSkin normalSkin){
        return  normalSkinService.updateNormalSkin(normalSkin);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteNormalSkin (@PathVariable Long id){
        return normalSkinService.deleteNormalSkin(id);
    }
}
