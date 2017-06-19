import React, { Component } from 'react';
import logo from './Dolphin-logo.svg';

//สร้าง  App (Component) = App.js (JSX)
class Logo extends Component {
  render() {
    return (
      <div><center>

      <img id="logoimg" src={logo} />
      <br/><br/>
      <p id="logotxt">Spin Dolphin</p>
      <br/>

      </center></div>
    );
  }
}

export default Logo;
