import React from "react";
import { Link } from "react-router-dom";

export default function SerNavbar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsMonkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/plumber">
                  Plumber
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/electrician">
                  Electrician
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/interiordesigner">
                  Interior Designer
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/carpenter">
                  Carpenter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
