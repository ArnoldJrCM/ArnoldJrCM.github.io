import React from "react";

export const Header = (props) => {
  return (
    <div className="wrapper">
      <header>
        <h1>Header </h1>
        <nav className="navbar">
          <ul className="navbuttons">
            <li><a href='./Home'>Home</a></li>
            <li><a href='./Contact'>Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="maincontent">
          {props.children}
        </div>
      </main>
      <footer>
        Footer
      </footer>
    </div>
  );
}

