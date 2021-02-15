import './App.css';
import { Menuitemsskincare } from './Menuitemsskincare';
import './Dropdownskincare.css'

import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function Dropdownskincare(){
    const [ click, setClick ] = useState (false);
    const handleClick = () => setClick (!click);

    return(
        <div>
            <ul onClick= {handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu' }>
                {Menuitemsskincare.map((item, index) => {
                    return(
                        <li key={index}><Link className={item.cName} to={item.path} onClick={() => setClick(false)}>{item.title}</Link></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Dropdownskincare;