import React from 'react'
import './Collection.css'
import CollectionItems from '../collection-items/CollectionItem.js'

const Collection=({title,items})=>(
    <div className="collection-preview">
        <h1 className='title'>{title}</h1>
        <div className="preview"></div>
            {
                items.map(({id,...otherProps})=>(
                <CollectionItems key={id} {...otherProps}/>
                ))
            }
    </div>
)
export default Collection