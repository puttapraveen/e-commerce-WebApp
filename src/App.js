import React from 'react';
import Homepage from "./pages/homepage/Homepage.js";
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'
import './App.css'
import ShopPage from '../src/pages/shop/shop.js'
import {Switch,Route,Redirect} from 'react-router-dom'
import Header from '../src/components/header/header.js'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.js'
import {auth,createuserProfileDocument} from './firebase/firebase-utility';
import { selectCurrentUser } from './redux/user/user-selector'
import { createStructuredSelector } from 'reselect'


class App extends React.Component{
   
    unsubscribeFromAuth=null

    componentDidMount(){
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
        if(userAuth){
          const userRef=await createuserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot=>{
            this.props.setCurrentUser({
                id:snapShot.id,
                ...snapShot.data()
              })
          });
        }
        else{
          this.props.setCurrentUser(userAuth)
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
    <Route exact path='/sign' render={()=>
      this.props.currentuser ? 
      (<Redirect to='/' />):
      (<SignInSignUp />)    
    } />
    </Switch>
    </div>
 );
}
}

const mapStateToProps=createStructuredSelector({
  currentuser:selectCurrentUser
});

const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
