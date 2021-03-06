import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../css_folders/sensitiveskin.css'



function SensitiveSkin (){

    const [ sensitiveskins, setSensitiveskins ] = useState (null);

    async function getSensitiveSkin(){
        try{
        const res = await axios.get('https://desolate-falls-27737.herokuapp.com/sensitiveskin')
        setSensitiveskins(res.data);
        }catch(e){
        console.error (e, e.message);
        }
    }

    useEffect (() => {
        getSensitiveSkin()
    }, [])

    const [ selectedItem, setSelectedItem ] = useState(null);



    // need to add ...cart //
    
    function selectItem(sensitiveskin){
        setSelectedItem(sensitiveskin);
        createCart(); 
/*         let cart = {"brand": selectedItem.brand, "name": selectedItem.name, "price": selectedItem.price, "image": selectedItem.image};
        console.log(cart) */
    }
        
    

       async function createCart(){
        /* let item = {"brand": selectedItem.brand, "name": selectedItem.name, "price": selectedItem.price, "image": selectedItem.image}; */
        try{
            const res = await axios.post ('https://desolate-falls-27737.herokuapp.com/cart', selectedItem);
            console.log (res.data);
        }catch(e){
            console.error (e, e.message)
        }
    }     

    return(
        <div>
            <h3 className="sensitiveskin-title">Sensitive Skin Type Products</h3>
 
            <div className="sensitiveskin-container">
                {
                    sensitiveskins && sensitiveskins.map (sensitiveskin => {
                        return(
                            <div className="sensitiveskin-item" key={ sensitiveskin.id }>
                                <figure><img src= { sensitiveskin.image } /></figure>
                                <h5 className="sensitiveskin-brand">{ sensitiveskin.brand }</h5>
                                <h4>{ sensitiveskin.name }</h4>
                                <h4>Product type: { sensitiveskin.type }</h4>
                                <h4>${ sensitiveskin.price }</h4>
                                <button onClick={ () => selectItem(sensitiveskin)}> Add to cart </button>
                            </div>
                        )
                    })
                }
                

            
            </div>
        </div>
    )
}

export default SensitiveSkin;
