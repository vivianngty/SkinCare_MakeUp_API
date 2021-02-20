import './App.css';
import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import axios from 'axios';
import homepagePicOne from './homepagePicOne.png'
import homepagePicTwo from './homepagePicTwo.jpg'
import homepagePicThree from './homepagePicThree.jpg'
import homepagePicFour from './homepagePicFour.png'
import homepagePicFive from './homepagePicFive.png'
import homepagePicSix from './homepagePicSix.jpg'

import Dropdownskincare from './Dropdownskincare'
import Dropdownmakeup from './Dropdownmakeup'
import ShoppingCart from './ShoppingCart'

import Cleansers from './pages/Cleansers'
import Toner from './pages/Toner'
import EyeCream from './pages/EyeCream'
import Serum from './pages/Serum'
import Moisturizer from './pages/Moisturizer'
import FaceOil from './pages/FaceOil'

import NormalSkin from './pages/NormalSkin'
import DrySkin from './pages/DrySkin'
import OilySkin from './pages/OilySkin'
import CombinationSkin from './pages/CombinationSkin'
import SensitiveSkin from './pages/SensitiveSkin'

import Footer from './Footer'


function App() {

 
  const [ dropdownskincare, setDropdownSkinCare ] = useState (false);

  const onMouseEnter = () => {
    setDropdownSkinCare(true)
  };

  const [ dropdownmakeup, setDropdownMakeUp ] = useState (false); 

  const showDropDown = () => {
    setDropdownMakeUp(true);
  };


      const [ shoppingCart, setShoppingCart ] = useState ([]);

      async function getShoppingCart(){
        try{
            const res = await axios.get ('http://localhost:8080/cart');
            setShoppingCart (res.data);
        }catch(e){
            console.error (e, e.message);
        }
    }

    useEffect (() => {
        getShoppingCart();
    }, [])
  


  return (
    <div>
      <Router>
        <div className="header">
          <Link to="/shoppingcart" className="shoppingcart-nav"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Shopping Cart ({shoppingCart.length}) </Link>
          <header>
              <Link to="/" className="home-nav">Skin Care & Make Up API</Link>
          </header>
        </div>

        <div className="navbar">

          <ul className="nav-menu">

            <li className='nav-item' onClick={onMouseEnter} >
                <Link className='nav-links' onClick={onMouseEnter}>Skin Care <i className="fas fa-caret-down" /></Link>
                { dropdownskincare && <Dropdownskincare /> }                
            </li>

            <li>      |        </li>


            <li onClick={showDropDown}><Link className="make-up-nav" onClick={showDropDown}>Make Up  <i className="fas fa-caret-down" /></Link>
              { dropdownmakeup && <Dropdownmakeup />}
            </li>
          </ul>



          <Switch>

            {/* <Route path="/skincare">
                  <Skincare />
            </Route> */}

            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/cleansers">
              <Cleansers />
            </Route>

            <Route path="/toner">
              <Toner />
            </Route>

            <Route path="/eyecream">
              <EyeCream />
            </Route>

            <Route path="/serum">
              <Serum />
            </Route>

            <Route path="/moisturizer">
              <Moisturizer />
            </Route>

            <Route path="/faceoil">
              <FaceOil />
            </Route>

            <Route path="/normalskin">
              <NormalSkin />
            </Route>

            <Route path="/dryskin">
              <DrySkin />
            </Route>

            <Route path="/oilyskin">
              <OilySkin />
            </Route>

            <Route path="/combinationskin">
              <CombinationSkin />
            </Route>

            <Route path="/sensitiveskin">
              <SensitiveSkin />
            </Route>

            <Route path="/shoppingcart">
              <ShoppingCart />
            </Route>

          </Switch>


        </div>
      </Router>
      <Footer />
    </div>
  );
}

class Home extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="homepagePic">
          <img className="homepagePicOne" src={homepagePicOne} alt="homepagePicOne"></img>
          <img className="homepagePicTwo" src={homepagePicTwo} alt="homepagePicTwo"></img>
          <img className="homepagePicThree" src={homepagePicThree} alt="homepagePicThree"></img>
          <img className="homepagePicFour" src={homepagePicFour} alt="homepagePicFour"></img>
          <img className="homepagePicFive" src={homepagePicFive} alt="homepagePicFive"></img>
          <img className="homepagePicSix" src={homepagePicSix} alt="homepagePicSix"></img>
        </div>
      </div>
    )
  }
}




export default App;