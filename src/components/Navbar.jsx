/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function Navbar(props) {
  return (
    <nav className="nav--container">
      <button type="button" onClick={props.handleClick}>Eng | Fin</button>
      <ul>
        <li><a href="#about">{props.language[0]}</a></li>
        <li><a href="#experience">{props.language[1]}</a></li>
        <li><a href="#projects">{props.language[2]}</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
