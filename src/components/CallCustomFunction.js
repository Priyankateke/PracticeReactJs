import React, { Component } from 'react';

class CallCustomFunction extends Component {

  constructor(props) {
    super(props);
    this.helloThere = this.helloThere.bind(this);
  }

  helloThere() {
    alert('Hi! Admin');
  }

  render() {
    return (
      <button onClick={this.helloThere}>
        Click Here
    </button>
    );
  }
}

export default CallCustomFunction;