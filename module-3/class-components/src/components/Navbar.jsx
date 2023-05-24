import React, { Component } from 'react';
import Button from './Button';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <h1>Ironhack main navbar</h1>
        <Button label="Login" info={{ city: 'BCN', course: 'Web' }} />
        <Button label="Login" info={{ city: 'MAD', course: 'Web' }} />
        <Button label="Login" info={{ city: 'SCL', course: 'Web' }} />
      </nav>
    )
  }
}

export default Navbar;