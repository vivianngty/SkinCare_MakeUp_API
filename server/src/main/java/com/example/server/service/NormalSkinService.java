package com.example.server.service;

import com.example.server.model.NormalSkin;
import org.springframework.http.HttpStatus;

public interface NormalSkinService {
    Iterable<NormalSkin> getAllNormalSkin();
    NormalSkin createNormalSkin (NormalSkin normalSkin);
    NormalSkin updateNormalSkin(NormalSkin normalSkin);
    HttpStatus deleteNormalSkin (Long id);

}
