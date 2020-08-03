import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.scss'
import { connect } from 'react-redux'
import { toogleCartHidden } from '../../redux/cart/cart-action'
import { selectCartItemsCount } from '../../redux/cart/cart-selector'
import { createStructuredSelector } from 'reselect'

const CardIcon=({toogleCartHidden,itemCount})=>(
<div className='cart-icon' onClick={toogleCartHidden}>
    <ShoppingIcon className="shopping-icon"/>
<span className='item-count'>{itemCount}</span>    
</div>
)

const mapStateToProps=createStructuredSelector({
    itemCount:selectCartItemsCount
});

const mapDispatchToProps=dispatch=>({
    toogleCartHidden:()=>dispatch(toogleCartHidden())
})
export default connect(mapStateToProps,mapDispatchToProps)(CardIcon)