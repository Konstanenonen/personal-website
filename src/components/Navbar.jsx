import React from 'react';
import PropTypes from 'prop-types';

function Navbar(props) {
  const { language, handleClick } = props;

  return (
    <nav className="nav--container">
      <button type="button" onClick={handleClick}>Eng | Fin</button>
      <ul>
        <li><a href="#about">{language[0]}</a></li>
        <li><a href="#experience">{language[1]}</a></li>
        <li><a href="#projects">{language[2]}</a></li>
      </ul>
    </nav>
  );
}
Navbar.propTypes = {
  language: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Navbar;
