import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../css_folders/cleanser.css'



function Cleansers (){

    const [ cleansers, setCleansers ] = useState (null);

    async function getCleanser(){
        try{
        const res = await axios.get('https://desolate-falls-27737.herokuapp.com/cleansers')
        setCleansers(res.data);
        }catch(e){
        console.error (e, e.message);
        }
    }

    useEffect (() => {
        getCleanser()
    }, [])

    const [ selectedItem, setSelectedItem ] = useState(null);





    // need to add ...cart //
    
     function selectItem(cleanser){
        setSelectedItem(cleanser);
        createCart(); 
    } 

    useEffect (() => {
        createCart();
    }, [])
        
    

       async function createCart(){
       /*  let item = {"brand": selectedItem.brand, "name": selectedItem.name, "price": selectedItem.price, "image": selectedItem.image}; */
        try{
            const res = await axios.post ('https://desolate-falls-27737.herokuapp.com/cart', selectedItem);
            console.log (res.data);
        }catch(e){
            console.error (e, e.message)
        }
    }
    
    

    return(
        <div>
            <h3 className="cleanser-title">Cleanser</h3>
 
            <div className="cleanser-container">
                {
                    cleansers && cleansers.map (cleanser => {
                        return(
                            <div className="cleanser-item" key={ cleanser.id } /* onSubmit={ (e) => handleSubmit(e) } */>
                                <figure><img src= { cleanser.image } /></figure>
                                <h5 className="cleanser-brand">{ cleanser.brand }</h5>
                                <h4>{ cleanser.name }</h4>
                                <h4>${ cleanser.price }</h4>
                                {/* <div className="cleanser-quantity" onChange = { (e) => handleChange(e) }>
                                    <input type="number" className="quantity-box" id="quantity" name="quantity" min="1" max="20" placeholder="Quantity"/>
                                </div> */}
                                <button type="submit" onClick={ () => selectItem(cleanser)}> Add to cart </button>
                            </div>
                        )
                    })
                }
                

            
            </div>
        </div>
    )
}

export default Cleansers;
