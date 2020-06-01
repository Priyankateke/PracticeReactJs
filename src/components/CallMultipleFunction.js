import React, { Component } from 'react'


class MultipleFunctionCall extends Component {

    hello()
    {
        alert('Hello')
    }

    itsWorking() {
        alert('Its Working')
    }
    render()
     {
         return(
             <button onClick={()=>{
                 this.hello();
                 this.itsWorking();
             }}>
                 callTwoFunction
             </button>
         )
     }
 }

 export default MultipleFunctionCall;