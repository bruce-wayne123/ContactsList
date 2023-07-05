import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div id="contactContainer">
      <div id="navContainer">
        <Link to="/">
          <img
            alt="homeIcon"
            className="navIcon"
            src="https://img.icons8.com/?size=512&id=2797&format=png"
          />
          Home
        </Link>

        <Link to="/addContact">
          <img
            alt="homeIcon"
            className="navIcon"
            src="https://img.icons8.com/?size=512&id=102544&format=png"
          />
          Add Contact
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
