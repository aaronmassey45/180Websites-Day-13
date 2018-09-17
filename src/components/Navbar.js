import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-5">
      <span className="navbar-brand mb-0 h1 mx-auto">TMDb Search!</span>
      <div className="navbar-nav text-center">
        <a className="nav-item nav-link" href="https://aaronmassey.pro/">
          My Portfolio
        </a>
        <a
          className="nav-item nav-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/@aaronmassey45"
        >
          Blog
        </a>
        <a
          className="nav-item nav-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/aaronmassey45"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
