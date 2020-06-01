
import React, { Component } from 'react';

class GetButtonValue extends Component {
  render() {
    return (
      <button value="John Doe" onClick={event => alert(event.target.value)}>
        Get Button Value
      </button>
    );
  }
}

export default GetButtonValue;