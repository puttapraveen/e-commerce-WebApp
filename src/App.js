import React from 'react';
import Homepage from "./pages/homepage/Homepage.js";
import ShopPage from '../src/pages/shop/shop.js'
import {Switch,Route} from 'react-router-dom'


function App() {
 return(
   <div>
     <Switch>
    <Route exact path='/' component={Homepage} />
    <Route path='/shop' component={ShopPage} />
    </Switch>
    </div>
 )
}

export default App;
