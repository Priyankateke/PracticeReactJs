import React from 'react'

//Arrow Function
const Greet=props => {
console.log(props)
return <h1>Hello {props.name}</h1>
}

//default component : can be use any name in app.js
export default Greet