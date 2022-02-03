/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function Footer(props) {
  return (
    <footer className="footer--container">
      <p>{props.language[0]}</p>
      <ul>
        <li><a href="https://fi.linkedin.com/in/konsta-nenonen-596767203">LinkedIn</a></li>
        <li><a href="https://github.com/Konstanenonen">GitHub</a></li>
        <li><a href="mailto:konstanenonen@protonmail.com">Email</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
