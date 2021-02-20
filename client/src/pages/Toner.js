import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../css_folders/toner.css'

function Toner (){

    const [ toners, setToners ] = useState (null);

    async function getToners(){
        try{
        const res = await axios.get('http://localhost:8080/toner')
        setToners (res.data);
        }catch(e){
        console.error (e, e.message);
        }
    }

    useEffect (() => {
        getToners ()
    }, [])

    const [ selectedItem, setSelectedItem ] = useState([]);



    // need to add ...cart //
    
    function selectItem(toner){
        setSelectedItem(toner);
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
            <h3 className="toner-title">Toners</h3>

            <div className="toner-container">
                {
                    toners && toners.map (toner => {
                        return(
                            <div className="toner-item" key={ toner.id }>
                                <figure><img src= { toner.image } /></figure>
                                <h5 className="toner-brand">{ toner.brand }</h5>
                                <h4>{ toner.name }</h4>
                                <h4>${ toner.price }</h4>
                                <button onClick={ () => selectItem(toner)}> Add to cart </button>
                            </div>
                        )
                    })
                }
                

            
            </div>
        </div>
    )
}

export default Toner;