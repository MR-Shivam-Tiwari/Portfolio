import React from "react";
import "../App.css";

function Navbar() {
  const logoStyle = {
    filter: "invert(100%)", // or use tintColor: "#FFFFFF" for white
  };

  return (
    <div className="text-warning container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand">
            <div>
              <img
                src={process.env.PUBLIC_URL + "/dsf-removebg-preview.png"}
                height="40"
                alt="Logo"
                style={logoStyle}
              />
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              backgroundColor: "white", // Set the background color to white
              borderColor: "white", // Set the border color to white
              color: "black", // Set the text color to black or any other color you prefer
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#About"
                >
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link active text-white"
                  href="#Services"
                  role="button"
                  aria-expanded="false"
                >
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active text-white" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
