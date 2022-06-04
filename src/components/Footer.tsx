// font-awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  connectText: string;
}

function Footer({ connectText }: Props) {
  return (
    <footer className="footer--container">
      <div className="friendly-ask-container">
        <p>{connectText}</p>
        <FontAwesomeIcon icon={["fas", "smile-beam"]} size="2x" />
      </div>
      <ul>
        <li>
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="1x" />
          <a href="https://fi.linkedin.com/in/konsta-nenonen-596767203">
            LinkedIn
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={["fab", "github"]} size="1x" />
          <a href="https://github.com/Konstanenonen">GitHub</a>
        </li>
        <li>
          <FontAwesomeIcon icon={["fas", "at"]} size="1x" />
          <a href="mailto:konstanenonen@protonmail.com">Email</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
