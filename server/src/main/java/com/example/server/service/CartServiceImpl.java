package com.example.server.service;

import com.example.server.model.Cart;
import com.example.server.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImpl implements CartService{

    @Autowired
    CartRepository cartRepository;

    @Override
    public Iterable<Cart> getAllCart() {
        return cartRepository.findAll();
    }

    @Override
    public Cart createCart(Cart cart) {
        return cartRepository.save(cart);
    }

    @Override
    public Cart updateCart(Cart cart) {
        return cartRepository.save(cart);
    }

    @Override
    public HttpStatus deleteCart(Long id) {
        cartRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
