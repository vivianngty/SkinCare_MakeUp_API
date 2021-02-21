import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../css_folders/oilyskin.css'



function OilySkin (){

    const [ oilyskins, setOilyskins ] = useState (null);

    async function getOilySkin(){
        try{
        const res = await axios.get('http://localhost:8080/oilyskin')
        setOilyskins(res.data);
        }catch(e){
        console.error (e, e.message);
        }
    }

    useEffect (() => {
        getOilySkin()
    }, [])

    const [ selectedItem, setSelectedItem ] = useState([]);



    // need to add ...cart //
    
    function selectItem(oilyskin){
        setSelectedItem(oilyskin);
        createCart(); 
/*         let cart = {"brand": selectedItem.brand, "name": selectedItem.name, "price": selectedItem.price, "image": selectedItem.image};
        console.log(cart) */
    }
        
    

       async function createCart(){
        let item = {"brand": selectedItem.brand, "name": selectedItem.name, "price": selectedItem.price, "image": selectedItem.image};
        try{
            const res = await axios.post ('http://localhost:8080/cart', item);
            console.log (res.data);
        }catch(e){
            console.error (e, e.message)
        }
    }     

    return(
        <div>
            <h3 className="oilyskin-title">Oily Skin Type Products</h3>
 
            <div className="oilyskin-container">
                {
                    oilyskins && oilyskins.map (oilyskin => {
                        return(
                            <div className="oilyskin-item" key={ oilyskin.id }>
                                <figure><img src= { oilyskin.image } /></figure>
                                <h5 className="oilyskin-brand">{ oilyskin.brand }</h5>
                                <h4>{ oilyskin.name }</h4>
                                <h4>Product type: { oilyskin.type }</h4>
                                <h4>${ oilyskin.price }</h4>
                                <button onClick={ () => selectItem(oilyskin)}> Add to cart </button>
                            </div>
                        )
                    })
                }
                

            
            </div>
        </div>
    )
}

export default OilySkin;
