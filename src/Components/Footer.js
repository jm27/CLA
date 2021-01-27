import React from "react";
import Image from "./Image";
import logo from "../utilities/imgs/logo-cla2.png";

import { Link } from "react-router-dom";
// map image
import map from "../utilities/imgs/map.png";

export default function Footer() {
  return (
    <nav className="navbar navbar-main footer">
      <div className="container-md  d-flex ">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            className="img-fluid footer-img "
            alt="plumbing plumbers phoenix CLA"
          ></img>
        </Link>
      </div>
      <div className="justify-content-end container-md d-block text-end">
        <div className="row">
          <div className="footer-Support col-md-6 col-12">
            <h3 className="footer-h">Need Support ?</h3>
            <h4 className="footer-h">
              <a
                className="nav-link"
                href="tel:602-800-1983"
                target="_blank"
                rel="noopener noreferrer"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Give us a call"
              >
                <i className="fas fa-phone"></i> (602)-800-1983
              </a>
            </h4>

            <h4 className="footer-h">
              <i className="fas fa-map-marker-alt"></i> Phoenix, AZ 85040
            </h4>
            <div className="d-flex footer-logo justify-content-end text-end">
              <h2 className="footer-h">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Check our facebook page"
                  className="footer-logo-link"
                >
                  <i className="fab  fa-facebook-f"></i>
                </a>
              </h2>
              <h2 className="footer-h footer-h-logo">
                <a
                  href="mailto:claplumbingaz@gmail.com?Subject=PlumbingQuotation"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Send us an E-mail"
                  className="footer-logo-link"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </h2>
            </div>
          </div>
          <div className="map col-md-6 col-12">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/place/Phoenix,+AZ,+USA/@33.6056695,-112.405923,10z/data=!3m1!4b1!4m5!3m4!1s0x872b12ed50a179cb:0x8c69c7f8354a1bac!8m2!3d33.4483771!4d-112.0740373"
            >
              {" "}
              <Image
                imgSrc={map}
                imgClassName=" img-map img-thumbnail"
                imgAlt="cla map location"
              >
                {" "}
              </Image>
            </a>
          </div>
        </div>{" "}
      </div>
    </nav>
  );
}
