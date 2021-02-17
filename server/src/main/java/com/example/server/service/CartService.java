package com.example.server.service;

import com.example.server.model.Cart;
import org.springframework.http.HttpStatus;

public interface CartService {
    Iterable<Cart> getAllCart();
    Cart createCart(Cart cart);
    Cart updateCart(Cart cart);
    HttpStatus deleteCart(Long id);
}
