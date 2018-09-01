import React from 'react';

export default () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-5 navbar-expand-lg">
      <span className="navbar-brand mb-0 h1">TMDb Search!</span>
      <div className="navbar-nav text-center">
        <a className="nav-item nav-link" href="https://aaronmassey.pro/">
          Home
        </a>
        <a
          className="nav-item nav-link"
          target="_blank"
          href="https://medium.com/@aaronmassey45"
        >
          Blog
        </a>
        <a
          className="nav-item nav-link"
          target="_blank"
          href="https://github.com/aaronmassey45"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
};
