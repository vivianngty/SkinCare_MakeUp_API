import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './css_folders/shoppingcart.css'
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

function ShoppingCart(){
    
    const [ shoppingCart, setShoppingCart ] = useState ([]);

    async function getShoppingCart(){
        try{
            const res = await axios.get ('https://desolate-falls-27737.herokuapp.com/cart');
            setShoppingCart (res.data);
        }catch(e){
            console.error (e, e.message);
        }
    }

    useEffect (() => {
        getShoppingCart();
    }, [])

    async function handleDelete (id){
        try{
            const res = await axios.delete ('https://desolate-falls-27737.herokuapp.com/cart/' + id );
            console.log (res.data);
            const updatedRes = await axios.get ('https://desolate-falls-27737.herokuapp.com/cart');
            console.log (updatedRes.data)
            setShoppingCart (updatedRes.data);
        }catch(e){
            console.error(e, e.message)
        }
    }

    
      if ( shoppingCart.length == 0 ){
        return(
            <div className="empty-cart">
                <h3>Did you forget to put something into cart?</h3>
                <br></br>
                <h3>Below are some suggestions for you .....  <i class="fa fa-angle-double-down" aria-hidden="true"></i></h3>
                <EmptyCart />
            </div>
        )
    }   

    let total = 0;
    for ( let i = 0; i < shoppingCart.length; i++ ){
        total = total + shoppingCart[i].price;
    }

    let shipping;
    let shippingLabel;
    if ( total <= 75 ){
        shipping = 8;
        shippingLabel = "$8";
    } else {
        shipping = 0;
        shippingLabel = "Congrats! You've earned FREE SHIPPING";
    };

    let estimatedTax = total * 0.08875;

    let estimatedTotal = total + estimatedTax + shipping;

    let roundedEstimatedTotal = parseFloat( estimatedTotal ).toFixed(2);
 
    return(
        <div className="shoppingCart-content">
            <h3><i class="fa fa-shopping-cart" aria-hidden="true"></i>  Your Shopping Cart</h3>

            <div className="flex-container">
                <div className="cart-item">
                    {
                        shoppingCart && shoppingCart.map (cartItem => {
                            return(
                                    <div className="individual">

                                        <div className="section-one">
                                            <figure><img src= { cartItem.image } /></figure>
                                        </div>

                                        <div className="section-two">
                                            <h5 className="cleanser-brand">{ cartItem.brand }</h5>
                                            <h4>{ cartItem.name }</h4>
                                            <h4>${ cartItem.price }</h4>
                                        </div>

                                        <div className="section-three">
                                            <button className="trashCan" onClick ={ () => handleDelete( cartItem.id )}> <i class="fa fa-trash" aria-hidden="true"></i> </button>
                                        </div>

                                    </div>
                            )
                        })
                    }
                </div>
                <div className="order-summary">
                    <div className="one">
                        <h4>Order Summary</h4>
                        <h4>{ shoppingCart.length }  ITEMS</h4>
                    </div>
                    <hr className="first-hr"/>
                    <div className="two">
                        <h5>Mechandise Total</h5>
                        <h5> $ {total} </h5>                
                    </div>
                    <div className="three">
                        <h5>Estimated Shipping</h5>
                        <h5>{shippingLabel}</h5>
                    </div>
                    <div className="four">
                        <h5>Estimated Taxes &nbsp; <span>8.875%</span></h5>
                        <h5> $ { estimatedTax }</h5>
                    </div>
                    <hr className="second-hr"/>
                    <div className="five">
                        <h5>Estimated Total</h5>
                        <h4> $ { roundedEstimatedTotal }</h4>
                    </div>
                    <div className="six">
                        <button><i class="fa fa-lock" aria-hidden="true"></i> CHECKOUT </button>
                    </div>
                </div>
                
            </div> 
        </div>

    )
}

function EmptyCart(){

    const [ cleanser, setCleanser ] = useState ([]);

    async function getCleanser(){
        try{
        const res = await axios.get('https://desolate-falls-27737.herokuapp.com/cleansers/' + random );
        setCleanser(res.data);
        }catch(e){
        console.error (e, e.message);
        }
    }

    const [ toner, setToner ] = useState ([]);

    async function getToner(){
        try{
        const res = await axios.get('https://desolate-falls-27737.herokuapp.com/toner/' + random)
        setToner (res.data);
        }catch(e){
        console.error (e, e.message);
        }
    }

    const [ eyecream, setEyeCream ] = useState ([]);

    async function getEyeCream(){
        try{
        const res = await axios.get('https://desolate-falls-27737.herokuapp.com/eyecream/' + random)
        setEyeCream (res.data);
        console.log (random);
        console.log (res.data);
        }catch(e){
        console.error (e, e.message);
        }
    }

    const [ serum, setSerum] = useState ([]);

    async function getSerum(){
        try{
        const res = await axios.get('https://desolate-falls-27737.herokuapp.com/serum/' + random)
        setSerum (res.data);
        }catch(e){
        console.error (e, e.message);
        }
    }

    const [ moisturizer, setMoisturizer] = useState ([]);

    async function getMoisturizer(){
        try{
        const res = await axios.get('https://desolate-falls-27737.herokuapp.com/moisturizer/' + random)
        setMoisturizer (res.data);
        }catch(e){
        console.error (e, e.message);
        }
    }

    const [ faceoil, setFaceoil] = useState ([]);

    async function getFaceoil(){
        try{
        const res = await axios.get('https://desolate-falls-27737.herokuapp.com/faceoil/' + random)
        setFaceoil (res.data);
        }catch(e){
        console.error (e, e.message);
        }
    }


    useEffect (() => {
        getCleanser();
        getToner ();
        getEyeCream();
        getSerum();
        getMoisturizer();
        getFaceoil();
    }, []);

    
    let random = Math.floor(Math.random()*9) + 1; // random number from 1 - 9



    return(
        <div className="random-container">

            <Link to="/cleansers">
                <div className="random-cleanser-item">
                    <figure><img src= { cleanser.image } /></figure>
                    <h5 className="cleanser-brand">{ cleanser.brand }</h5>
                    <h4>{ cleanser.name }</h4>
                    <h4>${ cleanser.price }</h4>
                </div>
            </Link>

            <Link to="/toner">
                <div className="random-toner-item">
                    <figure><img src= { toner.image } /></figure>
                    <h5 className="toner-brand">{ toner.brand }</h5>
                    <h4>{ toner.name }</h4>
                    <h4>${ toner.price }</h4>
                </div>
            </Link>

            <Link to="/eyecream">
                <div className="random-eyecream-item">
                    <figure><img src= { eyecream.image } /></figure>
                    <h5 className="eyecream-brand">{ eyecream.brand }</h5>
                    <h4>{ eyecream.name }</h4>
                    <h4>${ eyecream.price }</h4>
                </div>
            </Link>

            <Link to="/serum">
                <div className="random-serum-item">
                    <figure><img src= { serum.image } /></figure>
                    <h5 className="serum-brand">{ serum.brand }</h5>
                    <h4>{ serum.name }</h4>
                    <h4>${ serum.price }</h4>
                    
                </div>
            </Link>

            <Link to="/moisturizer">
                <div className="random-moisturizer-item">
                    <figure><img src= { moisturizer.image } /></figure>
                    <h5 className="moisturizer-brand">{ moisturizer.brand }</h5>
                    <h4>{ moisturizer.name }</h4>
                    <h4>${ moisturizer.price }</h4>
                </div>
            </Link>

            <Link to="/faceoil">
                <div className="random-faceoil-item">
                    <figure><img src= { faceoil.image } /></figure>
                    <h5 className="faceoil-brand">{ faceoil.brand }</h5>
                    <h4>{ faceoil.name }</h4>
                    <h4>${ faceoil.price }</h4>
                </div>
            </Link>

        </div>
    )
}

export default ShoppingCart;
/* testing */