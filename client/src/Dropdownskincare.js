/* import './App.css'; */
import { Menuitemsskincare } from './Menuitemsskincare';
import './Dropdownskincare.css'

import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import skintype from './skintype.png'

function Dropdownskincare(){
    const [ click, setClick ] = useState (false);
    const handleClick = () => setClick (!click);




    return(
        <div>
            <ul onClick= {handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu' }>
                <div className="grid-container">
                    <div className="grid-item-one">
                        <ul>
                            <li className="shop-by-products-title">Shop by products  <i class="fa fa-angle-down" aria-hidden="true"></i></li>
                        {Menuitemsskincare.map((item, index) => {

                            return(
                                    <li key={index}><Link className={item.cName} to={item.path} onClick={() => setClick(false)}>{item.title}</Link></li>
                            )

                        })}
                        </ul>
                    </div>

                    <div className="grid-item-two">
                        <ul>
                            <li className="shop-by-skintype-title">Shop by skin type  <i class="fa fa-angle-down" aria-hidden="true"></i></li>
                            <li className="shop-by-skintype-item"><Link to="/normalskin" className="normal-skin-title">Normal skin</Link></li>
                            <li className="shop-by-skintype-item"><Link to="/dryskin" className="dry-skin-title">Dry skin</Link></li>
                            <li className="shop-by-skintype-item"><Link to="/oilyskin" className="oily-skin-title">Oily skin</Link></li>
                            <li className="shop-by-skintype-item"><Link to="/combinationskin" className="combination-skin-title">Combination skin</Link></li>
                            <li className="shop-by-skintype-item"><Link to="/sensitiveskin" className="sensitive-skin-title">Sensitive skin</Link></li>
                        </ul>
                    </div>

                    <div className="grid-item-three">
                        <p> Don't know what skin type you are? See below...</p>
                        <figure className="shop-by-skintype-item"><img src={skintype} style={{ width: '100%', maxWidth: '670px' }}/></figure>
                    </div>

                </div>
            </ul>
        </div>
    )
}


export default Dropdownskincare;