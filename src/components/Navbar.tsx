import React from "react";

interface Props {
  language: string[];
  handleClick: () => void;
}

function Navbar({ language, handleClick }: Props) {
  return (
    <nav className="nav--container">
      <button type="button" onClick={handleClick}>
        Eng | Fin
      </button>
      <ul>
        <li>
          <a href="#about">{language[0]}</a>
        </li>
        <li>
          <a href="#experience">{language[1]}</a>
        </li>
        <li>
          <a href="#projects">{language[2]}</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
