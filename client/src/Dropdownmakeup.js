import './dropdownmakeup.css'
import { Menuitemsmakeup } from './Menuitemsmakeup';
import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function Dropdownmakeup(){

    const [ click, setClick ] = useState (false);
    const handleClick = () => setClick (!click);

    return(
        <div>
            <ul onClick= {handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu' }>

                <div className="grid-container">
                    <div className="grid-item-one">
                        <ul>
                            <li className="shop-by-products-title">Shop by products  <i class="fa fa-angle-down" aria-hidden="true"></i></li>
                        {Menuitemsmakeup.map((item, index) => {

                            return(
                                    <li key={index}><Link className={item.cName} to={item.path} onClick={() => setClick(false)}>{item.title}</Link></li>
                            )

                        })}
                        </ul>
                    </div>

                    <div className="grid-item-two">
                        <ul>
                            <li className="shop-by-skintype-title">Shop by skin type  <i class="fa fa-angle-down" aria-hidden="true"></i></li>
                        </ul>
                    </div>

                </div>
            </ul>
        </div>
    )
}

export default Dropdownmakeup;