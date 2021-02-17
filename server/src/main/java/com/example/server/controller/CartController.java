package com.example.server.controller;


import com.example.server.model.Cart;
import com.example.server.model.Cleanser;
import com.example.server.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    CartService cartService;

    @GetMapping
    public Iterable<Cart> getAllCart(){
        return cartService.getAllCart();
    }

    @PostMapping
    public Cart createCart(@RequestBody Cart cart){
        return cartService.createCart(cart);
    }

    @PatchMapping
    public Cart updateCart(@RequestBody Cart cart){
        return cartService.updateCart(cart);
    }

    @DeleteMapping ("/{id}")
    public HttpStatus deleteCartById(@PathVariable Long id){
        return cartService.deleteCart(id);
    }

}
