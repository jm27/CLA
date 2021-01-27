import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light navbar-main">
      <div className="container-md  d-flex ">
        <Link className="navbar-brand header-title" to="/">
          <h1>CLA Plumbing</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ">
            <Link className="nav-link" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about-us">
              About Us
            </Link>
            <a
              className="nav-link"
              href="tel:602-800-1983"
              target="_blank"
              rel="noopener noreferrer"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Give us a call"
            >
              <i className="fas fa-phone"></i>
            </a>
            <a
              className="nav-link"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Check our facebook page"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="nav-link"
              href="mailto:claplumbingaz@gmail.com?Subject=PlumbingQuotation"
              target="_blank"
              rel="noopener noreferrer"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Send us an E-mail"
            >
              <i className="fas fa-at"></i>
            </a>
            <a
              className="nav-link"
              href="https://www.google.com/maps/place/Phoenix,+AZ,+USA/@33.6056695,-112.405923,10z/data=!3m1!4b1!4m5!3m4!1s0x872b12ed50a179cb:0x8c69c7f8354a1bac!8m2!3d33.4483771!4d-112.0740373"
              target="_blank"
              rel="noopener noreferrer"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Visit us "
            >
              <i className="fas fa-map-marker-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
