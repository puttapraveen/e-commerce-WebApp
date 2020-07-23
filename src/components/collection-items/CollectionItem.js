import React from 'react'

const CollectionItems=({name,imageUrl,price})=>(
    <div className="item-preview">
        <div className='image' style={{backgroundImage:`url(${imageUrl})`}}>
        </div>
        <div className="footer">
            <h1>{name}</h1>
            <span>{price}</span>
        </div>
    </div>
)

export default CollectionItems;
