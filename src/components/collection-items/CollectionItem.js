import React from 'react'
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart-action'

import './CollectionItem.scss'
import CustumButton from '../custom-button/custom-button'

const CollectionItems=({item,addItem})=>{
    const{name,price,imageUrl}=item;
    return(
    <div className="collection-item">
        <div className='image' 
        style={{backgroundImage:`url(${imageUrl})`}}>
        </div>
        <div className="collection-footer">
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustumButton onClick={()=>addItem(item)} inverted>Add To Cart</CustumButton>
    </div>
)}

const mapDispatchToProps=dispatch=>({
    addItem:item=>dispatch(addItem(item))
})


export default connect
(null,mapDispatchToProps)
(CollectionItems);
