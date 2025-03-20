'use client'
import React, { useState } from 'react'

const Button = () => {

    console.log("button")

    const [state, setState] = useState(false)

    function handleClick() {

        setState(!state)

    }
    return (
        <button onClick={handleClick}>
            click mich
        </button>
    )
}

export default Button
