import React from "react";

function Navbar() {
  return (
    <>
      <header className="header">
        <nav className="header__navigation">
          <h3 className="header__logo">Easy Search</h3>

          <li className="header__list">
            <ul>Home</ul>
            <ul>Home</ul>
            <ul>Home</ul>
            <ul>Home</ul>
            <ul>Home</ul>
          </li>

          <div className="header__buttons">
            <button className="header__signin">Sign in</button>
            <button className="header__register">
              Register an organization
            </button>
          </div>
        </nav>

       
      </header>
    </>
  );
}

export default Navbar;
