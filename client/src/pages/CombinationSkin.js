import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../css_folders/combinationskin.css'



function CombinationSkin (){

    const [ combinationskins, setCombinationskins ] = useState (null);

    async function getCombinationSkin(){
        try{
        const res = await axios.get('https://desolate-falls-27737.herokuapp.com/combinationskin')
        setCombinationskins(res.data);
        }catch(e){
        console.error (e, e.message);
        }
    }

    useEffect (() => {
        getCombinationSkin()
    }, [])

    const [ selectedItem, setSelectedItem ] = useState(null);



    // need to add ...cart //
    
    function selectItem(combinationskin){
        setSelectedItem(combinationskin);
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
            <h3 className="combinationskin-title">Combination Skin Type Products</h3>
 
            <div className="combinationskin-container">
                {
                    combinationskins && combinationskins.map (combinationskin => {
                        return(
                            <div className="combinationskin-item" key={ combinationskin.id }>
                                <figure><img src= { combinationskin.image } /></figure>
                                <h5 className="combinationskin-brand">{ combinationskin.brand }</h5>
                                <h4>{ combinationskin.name }</h4>
                                <h4>Product type: { combinationskin.type }</h4>
                                <h4>${ combinationskin.price }</h4>
                                <button onClick={ () => selectItem(combinationskin)}> Add to cart </button>
                            </div>
                        )
                    })
                }
                

            
            </div>
        </div>
    )
}

export default CombinationSkin;
