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

import Footer from './Footer'


function App() {
  return (
    <div>
      <Router>
        <div className="header">
          <header>
              <Link to="/" className="home-nav">Skin Care & Make Up API</Link>
          </header>
        </div>

        <div className="nav">
          <ul>
            <li>
                <Link to="/skincare" className="skincare-nav">Skin Care</Link>
            </li>
            <li>      |        </li>
            <li>      Make Up      </li>
          </ul>



          <Switch>

            <Route path="/skincare">
                  <Skincare />
            </Route>

            <Route path="/">
              <Home />
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


/* 
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
*/
/* {
        cleansers && cleansers.map (cleanser => {
          return (
            <div className ="cleanserInfo">
              <h4>{cleanser.brand}</h4>
              <figure> <img src= {cleanser.image } /> </figure>
              <p>{cleanser.description}</p>
              <p>{cleanser.ingredients}</p>
              <h5>${cleanser.price}</h5>
            </div>
          )
        })
      }
*/
