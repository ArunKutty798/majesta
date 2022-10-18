import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <h1>Majesta</h1>
      </div>
      <div>
        <Link to="/retail">Retail stores</Link>
        <Link to="/online">Online stores</Link>
      </div>
    </div>
  );
};

export default Header;
