/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function Navbar(props) {
  return (
    <nav className="nav--container">
      <button type="button" onClick={props.handleClick}>Eng | Fin</button>
      <ul>
        <li>{props.language[0]}</li>
        <li>{props.language[1]}</li>
        <li>{props.language[2]}</li>
      </ul>
    </nav>
  );
}

export default Navbar;
