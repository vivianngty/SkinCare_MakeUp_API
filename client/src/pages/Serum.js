import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../css_folders/serum.css'



function Serum (){

    const [ serums, setSerums ] = useState (null);

    async function getSerum(){
        try{
        const res = await axios.get('https://desolate-falls-27737.herokuapp.com/serum')
        setSerums(res.data);
        }catch(e){
        console.error (e, e.message);
        }
    }

    useEffect (() => {
        getSerum()
    }, [])

    const [ selectedItem, setSelectedItem ] = useState(null);



    // need to add ...cart //
    
    function selectItem(serum){
        setSelectedItem(serum);
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
            <h3 className="serum-title">Serum</h3>
 
            <div className="serum-container">
                {
                    serums && serums.map (serum => {
                        return(
                            <div className="serum-item" key={ serum.id }>
                                <figure><img src= { serum.image } /></figure>
                                <h5 className="serum-brand">{ serum.brand }</h5>
                                <h4>{ serum.name }</h4>
                                <h4>${ serum.price }</h4>
                                <button onClick={ () => selectItem(serum)}> Add to cart </button>
                            </div>
                        )
                    })
                }
                

            
            </div>
        </div>
    )
}

export default Serum;
