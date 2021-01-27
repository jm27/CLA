import React from "react";
import Header from "./Header";

import Button from "./Button";
import logo from "../utilities/imgs/logo-cla2.png";

const Layout = ({ className, children }) => (
  <div>
    <Header></Header>
    <div className="main">
      <h1 className="title main-text pt-5 pb-5 ">Phoenix Plumbing Services</h1>
      <img
        src={logo}
        className="img-fluid main-img"
        alt="CLA Plumbing services"
      ></img>
      <h4 className="main-text  p-4">
        With over 20 years of experience the best plumbing service in Phoenix,
        CLA Plumbing is here for you!
      </h4>
      <Button className = "btn btn-outline-primary btn-lg main-btn mb-5 shadow"></Button>
    </div>
    <div className={className}>{children}</div>

  </div>
);

export default Layout;
