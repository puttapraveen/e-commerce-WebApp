import React from "react"
import "./header.css"
import { ReactComponent as Logo} from '../../assets/crown.svg'
import {Link} from 'react-router-dom'

const Header=()=>(
    
        <div className="Header">
                <Link className='logo-container' to='/'>
                 <Logo className='logo'/>
                </Link>
      
                <div className="options">
                <Link className='option' to='/shop'>
                    Shop
                </Link>
                <Link className='option' to='/shop'>
                    Contact
                </Link>
                <Link className='option' to='/sign'>
                    SignIn
                </Link>
                </div>
            </div>
        
    )
    
export default Header;