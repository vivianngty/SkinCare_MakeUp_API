package com.example.server.service;


import com.example.server.model.CombinationSkin;
import org.springframework.http.HttpStatus;

public interface CombinationSkinService {
    Iterable<CombinationSkin> getAllCombinationSkin();
    CombinationSkin createCombinationSkin (CombinationSkin combinationSkin);
    CombinationSkin updateCombinationSkin(CombinationSkin combinationSkin);
    HttpStatus deleteCombinationSkin (Long id);
}
