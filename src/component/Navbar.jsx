import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{borderBottom: "1px solid white "}}>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <a className="navbar-brand text-white" href="#">
            BooksStrore
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <Link className="nav-item nav-link active text-white" to="/">
                  HOME
              </Link>
              <Link className="nav-item nav-link active text-white" to="/books">
                  BOOKS
              </Link>
              <Link className="nav-item nav-link active text-white" to="/addBooks">
                  ADD BOOKS
              </Link>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
