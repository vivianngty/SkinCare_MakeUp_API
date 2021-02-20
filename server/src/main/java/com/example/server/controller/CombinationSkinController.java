package com.example.server.controller;

import com.example.server.model.CombinationSkin;
import com.example.server.service.CombinationSkinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/combinationskin")
public class CombinationSkinController {
    @Autowired
    CombinationSkinService combinationSkinService;

    @GetMapping
    public Iterable<CombinationSkin> getAllCombinationSkin(){
        return combinationSkinService.getAllCombinationSkin();
    }

    @PostMapping
    public CombinationSkin createCombinationSkin ( @RequestBody CombinationSkin combinationSkin){
        return combinationSkinService.createCombinationSkin(combinationSkin);
    }

    @PatchMapping
    public CombinationSkin updateCombinationSkin (@RequestBody CombinationSkin combinationSkin){
        return  combinationSkinService.updateCombinationSkin(combinationSkin);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteCombinationSkin (@PathVariable Long id){
        return combinationSkinService.deleteCombinationSkin(id);
    }
}
