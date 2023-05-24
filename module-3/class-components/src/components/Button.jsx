import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div>
        <button>{this.props.label} - {this.props.info.city}</button>
      </div>
    )
  }
}

export default Button;