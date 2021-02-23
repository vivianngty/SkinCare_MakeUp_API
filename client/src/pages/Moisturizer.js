import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../css_folders/moisturizer.css'



function Moisturizer (){

    const [ moisturizers, setMoisturizers ] = useState (null);

    async function getMoisturizer(){
        try{
        const res = await axios.get('https://desolate-falls-27737.herokuapp.com/moisturizer')
        setMoisturizers(res.data);
        }catch(e){
        console.error (e, e.message);
        }
    }

    useEffect (() => {
        getMoisturizer()
    }, [])

    const [ selectedItem, setSelectedItem ] = useState(null);



    // need to add ...cart //
    
    function selectItem(moisturizer){
        setSelectedItem(moisturizer);
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
            <h3 className="moisturizer-title">Moisturizer</h3>
 
            <div className="moisturizer-container">
                {
                    moisturizers && moisturizers.map (moisturizer => {
                        return(
                            <div className="moisturizer-item" key={ moisturizer.id }>
                                <figure><img src= { moisturizer.image } /></figure>
                                <h5 className="moisturizer-brand">{ moisturizer.brand }</h5>
                                <h4>{ moisturizer.name }</h4>
                                <h4>${ moisturizer.price }</h4>
                                <button onClick={ () => selectItem(moisturizer)}> Add to cart </button>
                            </div>
                        )
                    })
                }
                

            
            </div>
        </div>
    )
}

export default Moisturizer;
