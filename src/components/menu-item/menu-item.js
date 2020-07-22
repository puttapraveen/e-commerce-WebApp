import React from "react"
import "./menu-item.css"

const MenuItem=({title,imageurl,size})=>(
    
    <div style={{backgroundImage:`url(${imageurl})`}}
     className={`${size} menu-list`}>
    <div  className="background-image">
    <div className="content">
      <h1 className="title">{title}</h1>
      <center><span className="subtitle">Shop Now</span></center>
    </div>
  </div>
  </div>


)

export default MenuItem;
// 