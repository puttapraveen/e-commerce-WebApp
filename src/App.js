import React from 'react';
import Homepage from "./pages/homepage/Homepage.js";
import './App.css'
import ShopPage from '../src/pages/shop/shop.js'
import {Switch,Route} from 'react-router-dom'
import Header from '../src/components/header/header.js'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.js'
import {auth} from './firebase/firebase-utility';

class App extends React.Component{
    constructor(){
      super();

      this.state={
        currentuser:null
      }
    }


    unsubscribeFromAuth=null
    componentDidMount(){
      this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
        this.setState({currentuser:user})
        console.log(user)
      })
    }
    componentWillUnmount(){
      this.unsubscribeFromAuth();
    }

  render(){
  return(
   <div>
     <Header currentuser={this.state.currentuser}/>
     <Switch>
    <Route exact path='/' component={Homepage} />
    <Route path='/shop' component={ShopPage} />
    <Route path='/sign' component={SignInSignUp} />
    </Switch>
    </div>
 );
}
}
export default App;
