import React from "react";
import MenuItem from "../menu-item/menu-item.js"
import "./Directory.css"

class Directory extends React.Component{
    constructor(){
                super();
                this.state={
                         section:[
                                {
                                    title:"Hats",
                                    imageUrl:"./cap.jpg",
                                    id:1
                                },
                                {
                                    title:"Jackets",
                                    imageUrl:"./jackets.jpg",
                                    id:2
                                },
                                {
                                    title:"Sneakers",
                                    imageUrl:"./sneakers.jpg",
                                    id:3
                                },
                                {
                                    title:"Mens",
                                    imageUrl:"./mens.jpg",
                                    size:'large',
                                    id:4
                                },
                                {
                                    title:"Women",
                                    imageUrl:"women.jpg",
                                    size:'large',
                                    id:5
                                }
                        ]
                            }

                 }
    render(){
        return(
            <div className="directory-menu">
            {
            this.state.section.map(({title,imageUrl,id,size})=>(
                <MenuItem key={id} title={title.toUpperCase()} imageurl={imageUrl} size={size}/>
            ))}
            </div>
        )
    }
    
}
export default Directory