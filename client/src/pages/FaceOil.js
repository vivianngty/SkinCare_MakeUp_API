import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../css_folders/faceoil.css'



function FaceOil (){

    const [ faceoils, setFaceoils ] = useState (null);

    async function getFaceoil(){
        try{
        const res = await axios.get('https://desolate-falls-27737.herokuapp.com/faceoil')
        setFaceoils(res.data);
        }catch(e){
        console.error (e, e.message);
        }
    }

    useEffect (() => {
        getFaceoil()
    }, [])

    const [ selectedItem, setSelectedItem ] = useState(null);



    // need to add ...cart //
    
    function selectItem(faceoil){
        setSelectedItem(faceoil);
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
            <h3 className="faceoil-title">Face Oil</h3>
 
            <div className="faceoil-container">
                {
                    faceoils && faceoils.map (faceoil => {
                        return(
                            <div className="faceoil-item" key={ faceoil.id }>
                                <figure><img src= { faceoil.image } /></figure>
                                <h5 className="faceoil-brand">{ faceoil.brand }</h5>
                                <h4>{ faceoil.name }</h4>
                                <h4>${ faceoil.price }</h4>
                                <button onClick={ () => selectItem(faceoil)}> Add to cart </button>
                            </div>
                        )
                    })
                }
                

            
            </div>
        </div>
    )
}

export default FaceOil;
