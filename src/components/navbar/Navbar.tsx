import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <div className="nav-container">
          <h1>nyvia</h1>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
