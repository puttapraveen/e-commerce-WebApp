import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyBlVXAEpPrx4eGkzQA8z_o9wDRdM5hS2K0",
    authDomain: "e-commerce-app-a380a.firebaseapp.com",
    databaseURL: "https://e-commerce-app-a380a.firebaseio.com",
    projectId: "e-commerce-app-a380a",
    storageBucket: "e-commerce-app-a380a.appspot.com",
    messagingSenderId: "84218814779",
    appId: "1:84218814779:web:81c2cee705d937267f571e",
    measurementId: "G-FZT28V22JZ"
  };

export const createuserProfileDocument=async(userAuth,additionalData)=>{
  if(!userAuth) return;

  const userRef= firestore.doc(`users/${userAuth.uid}`)
  const snapshot=await userRef.get();

  if(!snapshot.exists){
    const{ displayName,email }=userAuth;
    const createdAt=new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(error){
      console.log('error',error.message);
    }
  }
  return userRef;
} 


  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;