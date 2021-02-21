import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../css_folders/dryskin.css'



function DrySkin (){

    const [ dryskins, setDryskins ] = useState (null);

    async function getDrySkin(){
        try{
        const res = await axios.get('http://localhost:8080/dryskin')
        setDryskins(res.data);
        }catch(e){
        console.error (e, e.message);
        }
    }

    useEffect (() => {
        getDrySkin()
    }, [])

    const [ selectedItem, setSelectedItem ] = useState([]);



    // need to add ...cart //
    
    function selectItem(dryskin){
        setSelectedItem(dryskin);
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
            <h3 className="dryskin-title">Dry Skin Type Products</h3>
 
            <div className="dryskin-container">
                {
                    dryskins && dryskins.map (dryskin => {
                        return(
                            <div className="dryskin-item" key={ dryskin.id }>
                                <figure><img src= { dryskin.image } /></figure>
                                <h5 className="dryskin-brand">{ dryskin.brand }</h5>
                                <h4>{ dryskin.name }</h4>
                                <h4>Product type: { dryskin.type }</h4>
                                <h4>${ dryskin.price }</h4>
                                <button onClick={ () => selectItem(dryskin)}> Add to cart </button>
                            </div>
                        )
                    })
                }
                

            
            </div>
        </div>
    )
}

export default DrySkin;
