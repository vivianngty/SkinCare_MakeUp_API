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

import Cleansers from './pages/Cleansers'

import Footer from './Footer'


function App() {

 
  const [ dropdownskincare, setDropdownSkinCare ] = useState (false);

  const onMouseEnter = () => {
    setDropdownSkinCare(true)
  };
  


  return (
    <div>
      <Router>
        <div className="header">
          <header>
              <Link to="/" className="home-nav">Skin Care & Make Up API</Link>
          </header>
        </div>

        <div className="navbar">

          <ul className="nav-menu">

            <li className='nav-item' onClick={onMouseEnter} >
                <Link to='/skincare' className='nav-links' onClick={onMouseEnter}>Skin Care <i className="fas fa-caret-down" /></Link>
                { dropdownskincare && <Dropdownskincare /> }                
            </li>

            <li>      |        </li>
            <li>      Make Up      </li>
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

class Skincare extends React.Component{
  render(){
    return(
      <div className="skincareworks">
        <h3>Skin Care works</h3>
      </div>
    )
  }
}


export default App;