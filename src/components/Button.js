import React from 'react'

const Button = (props) => (
    <button
        className={`button-component ${props.name}`}
        onClick={() => props.toggleClass(props.name, props.id)}
    >
        {props.name}
    </button>
)

export default Button


