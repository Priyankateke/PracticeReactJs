

import React, { Component } from 'react';

class TakeValue extends Component {
  render() {
    return (
      <button onClick={() => {
        let user = "Admin";
        console.log('Hi, ', user);
      }}>
        Click Here
      </button>
    );
  }
}

export default TakeValue;