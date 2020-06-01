import React, { Component } from 'react'

class CallInlineFunction extends Component {

    render() {
        return(
            <button onClick={()=>alert('hi inline function')}>CallInlineFunction</button>
        )
    }
}

export default CallInlineFunction