import React from "react"
import ShopData from "../shop/ShopData.js"
import Collection from '../../components/collection/Collection.js'

class ShopPage extends React.Component{
    constructor(){
        super();
        
        this.state={
            component:ShopData
        }
    }
    render(){
       const {component}=this.state
         return(
        <div className="Collection">
        {
            component.map(({id,...otherprops})=>(
            <Collection key={id} {...otherprops}/>))
             
        }
        </div>
    )
}}

export default ShopPage;