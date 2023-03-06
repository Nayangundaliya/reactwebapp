import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav-bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <NavLink to="/" className="navbar-brand">
                NayanGundaliya
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto">
                  <li className="nav-item active">
                    <NavLink to="/"  className="nav-link a ">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/service"  className="nav-link a">
                      Service
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/about"  className="nav-link a">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contact"  className="nav-link a">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
