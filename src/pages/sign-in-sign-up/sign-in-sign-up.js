import React from 'react';
import './sign-in-sign-up.css';
import Signin from '../../components/sign-in/Signin'
import SignUp from '../../components/sign-up/sign-up'
const SignInSignUp=()=>(
    <div className='sign'>
        <Signin />
        <SignUp />
    </div>
)
export default SignInSignUp