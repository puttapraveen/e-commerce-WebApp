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
                                    imageUrl:"./c4.jpg",
                                    id:1,
                                    linkUrl:'hats'
                                },
                                {
                                    title:"Jackets",
                                    imageUrl:"./jackets.jpg",
                                    id:2,
                                    linkUrl:''
                                },
                                {
                                    title:"Sneakers",
                                    imageUrl:"./sneak.jpg",
                                    id:3,
                                    linkUrl:''

                                },
                                {
                                    title:"Mens",
                                    imageUrl:"./mm.jpg",
                                    size:'large',
                                    id:4,
                                    linkUrl:''

                                },
                                {
                                    title:"Women",
                                    imageUrl:"women.jpg",
                                    size:'large',
                                    id:5,
                                    linkUrl:''

                                }
                        ]
                            }

                 }
    render(){
        return(
            <div className="directory-menu">
            {
            this.state.section.map(({id,...othersectionprops})=>(
                <MenuItem key={id} {...othersectionprops}/>
            ))}
            </div>
        )
    }
    
}
export default Directory