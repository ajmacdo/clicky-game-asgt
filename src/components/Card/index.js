import React from "react";
import "./style.css";

function Card(props) {
    return ( 

    <div onClick = {
            () => props.shuffleCards(props.id)
            } className = "card" >
        
            <div className = "img-container">
                <img alt = { props.location }
                src = { props.image }/> 
            </div>

            <div className = "content">
                <ul>
                    <li>
                        <strong> Location: </strong> {props.location} 
                    </li> 
                </ul> 
            </div>

    </div>
       
    );
}

export default Card;
