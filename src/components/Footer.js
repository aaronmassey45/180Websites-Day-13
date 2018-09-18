import React from 'react';

export default () => {
  return (
    <footer className="text-center bg-dark text-white p-2">
      <p>
        &lt;/&gt; by{' '}
        <a href="https://aaronmassey.pro" className="text-gold">
          Aaron Massey
        </a>
      </p>
      <p>
        Design inspired by{' '}
        <a
          href="https://www.youtube.com/watch?v=NDEt0KdDbhk"
          target="_blank"
          className="text-gold"
        >
          Brad Traversy
        </a>
      </p>
      <a
        href="https://github.com/aaronmassey45/tMDB-Search"
        className="text-gold"
      >
        View Code
      </a>
    </footer>
  );
};
