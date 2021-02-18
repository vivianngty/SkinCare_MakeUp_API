import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../css_folders/cleanser.css'



function Cleansers (){

    const [ cleansers, setCleansers ] = useState (null);

    async function getCleanser(){
        try{
        const res = await axios.get('http://localhost:8080/cleansers')
        setCleansers(res.data);
        }catch(e){
        console.error (e, e.message);
        }
    }

    useEffect (() => {
        getCleanser()
    }, [])

    const [ selectedItem, setSelectedItem ] = useState([]);



    // need to add ...cart //
    
    function selectItem(cleanser){
        setSelectedItem(cleanser);
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
            <h3 className="cleanser-title">Cleanser</h3>
            <hr></hr>
            <div className="cleanser-container">
                {
                    cleansers && cleansers.map (cleanser => {
                        return(
                            <div className="cleanser-item" key={ cleanser.id }>
                                <figure><img src= { cleanser.image } /></figure>
                                <h5 className="cleanser-brand">{ cleanser.brand }</h5>
                                <h4>{ cleanser.name }</h4>
                                <h4>${ cleanser.price }</h4>
                                <button onClick={ () => selectItem(cleanser)}> Add to cart </button>
                            </div>
                        )
                    })
                }
                

            
            </div>
        </div>
    )
}

export default Cleansers;
