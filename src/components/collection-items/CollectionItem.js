import React from 'react'
import './CollectionItem.css'

const CollectionItems=({name,imageUrl,price})=>(
    <div className="Itempreview">
        <div className='image' style={{backgroundImage:`url(${imageUrl})`}}>
        </div>
        <div className="footer">
            <span>{name}</span>
            <span>{price}</span>
        </div>
    </div>
)

export default CollectionItems;
