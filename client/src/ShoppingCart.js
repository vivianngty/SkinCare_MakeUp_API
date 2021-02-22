import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './css_folders/shoppingcart.css'

function ShoppingCart(){
    
    const [ shoppingCart, setShoppingCart ] = useState ([]);

    async function getShoppingCart(){
        try{
            const res = await axios.get ('http://localhost:8080/cart');
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
            const res = await axios.delete ('http://localhost:8080/cart/' + id );
            console.log (res.data);
            const updatedRes = await axios.get ('http://localhost:8080/cart');
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
                <h3>Below is some suggestions for you .....  <i class="fa fa-angle-double-down" aria-hidden="true"></i></h3>
                <EmptyCart />
            </div>
        )
    }   



    return(
        <div className="shoppingCart-content">
            <h3><i class="fa fa-shopping-cart" aria-hidden="true"></i>  Your Shopping Cart</h3>

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
        </div>

    )
}

function EmptyCart(){

    const [ cleanser, setCleanser ] = useState ([]);

    async function getCleanser(){
        try{
        const res = await axios.get('http://localhost:8080/cleansers/' + random );
        setCleanser(res.data);
        }catch(e){
        console.error (e, e.message);
        }
    }

    const [ toner, setToner ] = useState ([]);

    async function getToner(){
        try{
        const res = await axios.get('http://localhost:8080/toner/' + random)
        setToner (res.data);
        }catch(e){
        console.error (e, e.message);
        }
    }

    useEffect (() => {
        getCleanser();
        getToner ();
    }, [])






    let random = Math.floor(Math.random()*9) + 1; // random number from 1 - 9

    return(
        <div className="random-container">

            <div className="random-cleanser-item">
                <figure><img src= { cleanser.image } /></figure>
                <h5 className="cleanser-brand">{ cleanser.brand }</h5>
                <h4>{ cleanser.name }</h4>
                <h4>${ cleanser.price }</h4>
            </div>

            <div className="random-toner-item">
                <figure><img src= { toner.image } /></figure>
                <h5 className="toner-brand">{ toner.brand }</h5>
                <h4>{ toner.name }</h4>
                <h4>${ toner.price }</h4>
            </div>

        </div>
    )
}

export default ShoppingCart;