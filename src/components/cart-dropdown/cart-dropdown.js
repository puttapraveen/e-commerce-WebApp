import React from 'react';
import CustomButton from '../custom-button/custom-button'
import './cart-dropdown.scss'
import CartItem from '../cart-item/cart-item'
import { connect } from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart-selector'
import { createStructuredSelector } from 'reselect'
import {withRouter} from 'react-router-dom'
import { toogleCartHidden} from '../../redux/cart/cart-action'

const CartDropdown=({cartItem,history,dispatch})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItem.length ?
                (cartItem.map(cartItems=>(
                <CartItem key={cartItems.id} item={cartItems}/>
                    )))
                :
                (
                    <span className='empty-message'>YOUR CART IS EMPTY</span>
                )
                
                }
        </div>
        <CustomButton onClick={()=>
            {
                history.push('/checkout');
                dispatch(toogleCartHidden());
            }
        }>GO TO CHECKOUT</CustomButton>
    </div>
);
const mapStateToProps=createStructuredSelector(
    {cartItem:selectCartItems}
)

export default withRouter(connect(mapStateToProps)(CartDropdown))