import React, { Component } from 'react';

class Array extends Component {

  fruits = ['Apple', 'Mengo', 'Orange', 'Banana', 'Cherry', 'Kiwi'];

  removeFruit(fruits) {
    alert(fruits)
  }

  render() {
    return (
      <ul>
        {this.fruits.map((item) => (
          <li>
            <button onClick={() => this.removeFruit(item)}>
              Click Here
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Array;