import React from 'react';
import Homepage from "./pages/homepage/Homepage.js";
import './App.css'
import ShopPage from '../src/pages/shop/shop.js'
import {Switch,Route} from 'react-router-dom'
import Header from '../src/components/header/header.js'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.js'

function App() {
 return(
   <div>
     <Header />
     <Switch>
    <Route exact path='/' component={Homepage} />
    <Route path='/shop' component={ShopPage} />
    <Route path='/sign' component={SignInSignUp} />
    </Switch>
    </div>
 )
}

export default App;
