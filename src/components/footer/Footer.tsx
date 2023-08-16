import "./Footer.css";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} Nyvia Projects. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
