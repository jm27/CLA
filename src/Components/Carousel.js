import React from "react";
import CarouselItem from "./CarouselItem";

// Images
import famOne from "../utilities/imgs/family-1.jpg";
import famTwo from "../utilities/imgs/family-2.jpg";
import famThree from "../utilities/imgs/family-3.jpg";

export default function Carousel() {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide mt-5 pt-5"
      data-bs-ride="carousel"
    >
      <span className="sub-text">CLIENT</span>
      <div className="testimonials mb-5">
        <h2 className="main-text testimonials pb-3 pt-1"> TESTIMONIALS</h2>
      </div>
      <ol className="carousel-indicators">
        <li
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
        ></li>
        <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <CarouselItem
          carouselClass="carousel-item active"
          imgSrc={famOne}
          imgAlt="CLA Plumbing family review"
          imgClassName="mx-auto d-block carousel-img rounded-circle"
          label="Susan Clarke"
          text=" Had a water heater tank leak, CLA came in and replaced the unit under warranty. Very professional, knowledgeable, and polite. Made no mess, didn't damage anything, and cleaned up perfectly. Thanks!"
        ></CarouselItem>
        <CarouselItem
          imgSrc={famTwo}
          imgAlt="CLA Plumbing family review"
          imgClassName="mx-auto d-block carousel-img rounded-circle"
          label="Jason Mora"
          text=" Easy to get appointment with. Very helpful customer service, excellent job working, and courteous technicians. They know what they are doing. Gives good advice. so no worries I strongly recommend this company ."
        ></CarouselItem>
        <CarouselItem
          imgSrc={famThree}
          imgAlt="CLA Plumbing family review"
          imgClassName="mx-auto d-block carousel-img rounded-circle"
          label="Marc Moon"
          text=" Service was great, very professional and personable. They are fast responding -I called for service and he was there within an hour. I highly recommend this company, they have great price and great service!"
        ></CarouselItem>
      </div>

      <a
        className="carousel-control-prev"
        href="#carouselExampleDark"
        role="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleDark"
        role="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}
