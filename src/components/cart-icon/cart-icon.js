import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.scss'
import { connect } from 'react-redux'
import { toogleCartHidden } from '../../redux/cart/cart-action'

const CardIcon=({toogleCartHidden,itemCount})=>(
<div className='cart-icon' onClick={toogleCartHidden}>
    <ShoppingIcon className="shopping-icon"/>
<span className='item-count'>{itemCount}</span>    
</div>
)

const mapStateToProps=({cart:{cartItems}})=>({
    itemCount:cartItems.reduce((accumulatedQuantity,cartItem)=> accumulatedQuantity + cartItem.quantity,0)
});

const mapDispatchToProps=dispatch=>({
    toogleCartHidden:()=>dispatch(toogleCartHidden())
})
export default connect(mapStateToProps,mapDispatchToProps)(CardIcon)