import React from 'react'

const ColorChangeButton = (props) => {
    console.log(props)
    return (
        <button className={props.color} onClick={() => props.setColor(props.color)}>{props.color}</button>
    )
}


export default ColorChangeButton