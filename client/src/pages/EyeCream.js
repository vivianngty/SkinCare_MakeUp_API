import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../css_folders/eyecream.css'

function EyeCream (){

    const [ eyecreams, setEyeCreams ] = useState (null);

    async function getEyeCreams(){
        try{
        const res = await axios.get('https://desolate-falls-27737.herokuapp.com/eyecream')
        setEyeCreams (res.data);
        }catch(e){
        console.error (e, e.message);
        }
    }

    useEffect (() => {
        getEyeCreams ()
    }, [])

    const [ selectedItem, setSelectedItem ] = useState(null);



    // need to add ...cart //
    
    function selectItem(eyecream){
        setSelectedItem(eyecream);
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
            <h3 className="eyecream-title">Eye Cream</h3>

            <div className="eyecream-container">
                {
                    eyecreams && eyecreams.map (eyecream => {
                        return(
                            <div className="eyecream-item" key={ eyecream.id }>
                                <figure><img src= { eyecream.image } /></figure>
                                <h5 className="eyecream-brand">{ eyecream.brand }</h5>
                                <h4>{ eyecream.name }</h4>
                                <h4>${ eyecream.price }</h4>
                                <button onClick={ () => selectItem(eyecream)}> Add to cart </button>
                            </div>
                        )
                    })
                }
                

            
            </div>
        </div>
    )
}

export default EyeCream;