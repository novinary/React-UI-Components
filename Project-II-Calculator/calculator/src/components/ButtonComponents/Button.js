import React from 'react'

function Button (props){
    return(
        <button className={props.item.style} onClick = {props.handleClick}>{props.item.name}</button>

    )
}

export default Button