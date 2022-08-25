import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faLinkedin,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="footer-pin">
        <h5>
          © All code by <br />
          Xan Hamilton
        </h5>
      </div>
      <div className="righty">
        <div className="social-menu">
          <a href="https://docs.google.com/document/d/1yHvR1-Z24KWBlg-bggg9rumox6zUFqVdh0VKMceKoKw/edit">
            <FontAwesomeIcon className="i resume" icon={faFile} />
          </a>
          <a href="https://www.facebook.com/xan.hamilton.7/">
            <FontAwesomeIcon
              className="i fa-facebook"
              icon={faFacebookSquare}
            />
          </a>
          <a href="https://www.linkedin.com/in/thomas-hamilton-522b17181/">
            <FontAwesomeIcon className="i" icon={faLinkedin} />
          </a>
          <a href="https://github.com/tsadiktalmudim">
            <FontAwesomeIcon className="i github" icon={faGithubSquare} />
          </a>
        </div>
      </div>
    </footer>
  );
}
