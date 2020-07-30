import React from 'react';
import Homepage from "./pages/homepage/Homepage.js";
import './App.css'
import ShopPage from '../src/pages/shop/shop.js'
import {Switch,Route} from 'react-router-dom'
import Header from '../src/components/header/header.js'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.js'
import {auth,createuserProfileDocument} from './firebase/firebase-utility';

class App extends React.Component{
    constructor(){
      super();

      this.state={
        currentuser:null
      }
    }


    unsubscribeFromAuth=null

    componentDidMount(){
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
        if(userAuth){
          const userRef=await createuserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot=>{
            this.setState({
              currentuser:{
                id:snapShot.id,
                ...snapShot.data()
              }
            });
          });
        }
        else{
          this.setState({currentuser:userAuth})
        }
      });
    }



    componentWillUnmount(){
      this.unsubscribeFromAuth();
    }

  render(){
  return(
   <div>
     <Header/>
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
