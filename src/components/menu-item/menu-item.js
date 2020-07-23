import React from "react"
import "./menu-item.css"
import {withRouter} from 'react-router-dom'

const MenuItem=({title,imageUrl,size,history,linkUrl,match})=>(
    
    <div onClick={()=>history.push(`${match.url}${linkUrl}`)} style={{backgroundImage:`url(${imageUrl})`}}
     className={`${size} menu-list`}>
    <div  className="background-image">
    <div className="content">
      <h1 className="title">{title}</h1>
      <center><span className="subtitle">Shop Now</span></center>
    </div>
  </div>
  </div>


)

export default withRouter(MenuItem);
// 