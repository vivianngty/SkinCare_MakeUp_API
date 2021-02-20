package com.example.server.service;

import com.example.server.model.NormalSkin;
import com.example.server.repository.NormalSkinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class NormalSkinServiceImpl implements NormalSkinService{

    @Autowired
    NormalSkinRepository normalSkinRepository;

    @Override
    public Iterable<NormalSkin> getAllNormalSkin() {
        return normalSkinRepository.findAll();
    }

    @Override
    public NormalSkin createNormalSkin(NormalSkin normalSkin) {
        return normalSkinRepository.save(normalSkin);
    }

    @Override
    public NormalSkin updateNormalSkin(NormalSkin normalSkin) {
        return normalSkinRepository.save(normalSkin);
    }

    @Override
    public HttpStatus deleteNormalSkin(Long id) {
        normalSkinRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
