import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="footer text-center py-4">
      <div className="container">
        <div className="mb-3">
          <a href="https://github.com/RafeyAhmed" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://www.linkedin.com/in/rafay-ahmed-19832133b/" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="mailto:rafayahmed950@icloud.com" className="footer-icon">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
        </div>
        <p className="mb-0 small">&copy; {new Date().getFullYear()} Rafay Ahmed. All rights reserved.</p>
      </div>
    </footer>
  );
}
