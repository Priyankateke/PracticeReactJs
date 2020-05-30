import React from 'react'

//Arrow Function
const Greet = props => {
    console.log(props)
    //Props are immutable we cant change value of props
   // props.name="Pooja"
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </div>

    )
}

//default component : can be use any name in app.js
export default Greet