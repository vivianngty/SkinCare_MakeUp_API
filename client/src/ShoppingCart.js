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
                                <button onClick ={ () => handleDelete( cartItem.id )}> <i class="fa fa-trash" aria-hidden="true"></i> </button>
                            </div>
                        </div>
                    )
                })
            }
            
            </div>
        </div>

    )
}

export default ShoppingCart;