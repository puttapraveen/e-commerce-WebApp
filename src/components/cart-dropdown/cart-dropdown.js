import React from 'react';
import CustomButton from '../custom-button/custom-button'
import './cart-dropdown.scss'
import CartItem from '../cart-item/cart-item'
import { connect } from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart-selector'
import { createStructuredSelector } from 'reselect'

const CartDropdown=({cartItem})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItem.map(cartItems=>
                    (
                    <CartItem key={cartItems.id} item={cartItems}/>
                    ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);
const mapStateToProps=createStructuredSelector(
    {cartItem:selectCartItems}
)

export default connect(mapStateToProps)(CartDropdown)