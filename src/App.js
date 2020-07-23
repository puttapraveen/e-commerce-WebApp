import React from 'react';
import Homepage from "./pages/homepage/Homepage.js";
import {Switch,Route,Link} from 'react-router-dom'

const Hatspage=()=>(
  <div>
    <h1>Hey</h1>
    </div>
)
function App() {
 return(
   <div>
     <switch>
    <Route exact path='/' component={Homepage} />
    <Route path='/hats' component={Hatspage} />
    </switch>
    </div>
 )
}

export default App;
