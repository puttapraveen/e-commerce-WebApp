import React from 'react';
import CustomButton from '../custom-button/custom-button'
import './cart-dropdown.scss'
import CartItem from '../cart-item/cart-item'
import { connect } from 'react-redux'


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
const mapStateToProps=(state)=>(
    {cartItem:state.cart.cartItems}
)

export default connect(mapStateToProps)(CartDropdown)