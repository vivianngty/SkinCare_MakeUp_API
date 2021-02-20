package com.example.server.controller;



import com.example.server.model.OilySkin;
import com.example.server.service.OilySkinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/oilyskin")
public class OilySkinController {
    @Autowired
    OilySkinService oilySkinService;

    @GetMapping
    public Iterable<OilySkin> getAllOilySkin(){
        return oilySkinService.getAllOilySkin();
    }

    @PostMapping
    public OilySkin createOilySkin ( @RequestBody OilySkin oilySkin){
        return oilySkinService.createOilySkin(oilySkin);
    }

    @PatchMapping
    public OilySkin updateOilySkin (@RequestBody OilySkin oilySkin){
        return  oilySkinService.updateOilySkin(oilySkin);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteOilySkin (@PathVariable Long id){
        return oilySkinService.deleteOilySkin(id);
    }
}
