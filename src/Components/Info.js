import React from 'react';
import Avatar from '../images/avatar.png';

export default function Info() {
  return (
    <div className="Info">
      <img src={Avatar} alt="avatar" className="avatar" />
      <div className="personal-info">
        <h1>Kles Anderson</h1>
        <p>Frontend Developer</p>
        <a href="/" target="_blank">
          klesand website
        </a>
        <button className="email-btn">
          <a href="mailto:">
            <i className="fas fa-envelope"></i>
          </a>
        </button>
      </div>
    </div>
  );
}
