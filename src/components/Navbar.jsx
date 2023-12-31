import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ toggleCatsList }) {
  return (
    <div className="nav">
      <nav className="navbar navbar-expand-lg bg-body-tertiar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            SMCC CATfé
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item" style={{ margin: "20px" }}>
          
              </li>
              <li className="nav-item" style={{ margin: "20px" }}>
                <Link className="mx-2" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item" style={{ margin: "20px" }}>
                <Link
                  className="mx-2"
                  to="/catslist"
                  onClick={() => toggleCatsList(true)}
                >
                  Adopt
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                style={{ margin: "20px" }}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                style={{ margin: "20px" }}
                type="submit"
              >
                Search
                </button>
              
              <button
                className="btn btn-outline-success"
                style={{ margin: "20px" }}
                type="submit"
              >
                Donate
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
