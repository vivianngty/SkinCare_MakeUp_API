import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../css_folders/cleanser.css'



function Cleansers (){

    const [ cleansers, setCleansers ] = useState (null);

    async function getCleanser(){
        try{
        const res = await axios.get('http://localhost:8080/cleansers')
        console.log (res.data)
        setCleansers(res.data);
        }catch(e){
        console.error (e, e.message);
        }
    }

    useEffect (() => {
        getCleanser()
    }, [])

    return(
        <div className="cleanser-container">
            {
                cleansers && cleansers.map (cleanser => {
                    return(
                        <div className="cleanser-item">
                            <figure><img src= { cleanser.image } /></figure>
                            <h5>{ cleanser.brand }</h5>
                            <h4>{ cleanser.name }</h4>
                            <h4>${ cleanser.price }</h4>
                        </div>
                    )
                })
            }
            

        
        </div>
    )
}


export default Cleansers;