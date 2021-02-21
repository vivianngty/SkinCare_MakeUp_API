import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../css_folders/normalskin.css'



function NormalSkin (){

    const [ normalskins, setNormalskins ] = useState (null);

    async function getNormalSkin(){
        try{
        const res = await axios.get('http://localhost:8080/normalskin')
        setNormalskins(res.data);
        }catch(e){
        console.error (e, e.message);
        }
    }

    useEffect (() => {
        getNormalSkin()
    }, [])

    const [ selectedItem, setSelectedItem ] = useState([]);



    // need to add ...cart //
    
    function selectItem(normalskin){
        setSelectedItem(normalskin);
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
            <h3 className="normalskin-title">Normal skin type products</h3>
 
            <div className="normalskin-container">
                {
                    normalskins && normalskins.map (normalskin => {
                        return(
                            <div className="normalskin-item" key={ normalskin.id }>
                                <figure><img src= { normalskin.image } /></figure>
                                <h5 className="normalskin-brand">{ normalskin.brand }</h5>
                                <h4>{ normalskin.name }</h4>
                                <h4>Product type: { normalskin.type }</h4>
                                <h4>${ normalskin.price }</h4>
                                <button onClick={ () => selectItem(normalskin)}> Add to cart </button>
                            </div>
                        )
                    })
                }
                

            
            </div>
        </div>
    )
}

export default NormalSkin;
