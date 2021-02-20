package com.example.server.service;

import com.example.server.model.CombinationSkin;
import com.example.server.repository.CombinationSkinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class CombinationSkinServiceImpl implements CombinationSkinService{

    @Autowired
    CombinationSkinRepository combinationSkinRepository;

    @Override
    public Iterable<CombinationSkin> getAllCombinationSkin() {
        return combinationSkinRepository.findAll();
    }

    @Override
    public CombinationSkin createCombinationSkin(CombinationSkin combinationSkin) {
        return combinationSkinRepository.save(combinationSkin);
    }

    @Override
    public CombinationSkin updateCombinationSkin(CombinationSkin combinationSkin) {
        return combinationSkinRepository.save(combinationSkin);
    }

    @Override
    public HttpStatus deleteCombinationSkin(Long id) {
        combinationSkinRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
