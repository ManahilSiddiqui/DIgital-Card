import ReactDOM from 'react-dom/client'
import photo from './../images/PhotoCard.png'
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
  return (
    <div className="info">
      <img className="info--photo" src={photo} alt="Me" />
      <h1 className="info--fullname">Manahil Siddiqui</h1>
      <h5 className="info--role">Front End Developer</h5>
      <p className="info--website">
        <a
          className="info--websiteLink"
          href="https://www."
          target="_blank"
          rel="noopener noreferrer"
        >
          ManahilSiddiqui.dev
        </a>
      </p>
      <div className="info--buttons">
        <address>
          <a href="mailto:manahil_siddiqui@hotmail.com">
            {" "}
            <button className="button button--email">
              <FontAwesomeIcon icon={faEnvelope} className="info--icon" />
              Email
            </button>
          </a>
        </address>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button button--linkedin">
            <FontAwesomeIcon icon={faLinkedin} className="info--icon" />
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}