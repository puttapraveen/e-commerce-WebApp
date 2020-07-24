import React from 'react';
import Homepage from "./pages/homepage/Homepage.js";
import './App.css'
import ShopPage from '../src/pages/shop/shop.js'
import {Switch,Route} from 'react-router-dom'
import Header from '../src/components/header/header.js'

function App() {
 return(
   <div>
     <Header />
     <Switch>
    <Route exact path='/' component={Homepage} />
    <Route path='/shop' component={ShopPage} />
    </Switch>
    </div>
 )
}

export default App;
