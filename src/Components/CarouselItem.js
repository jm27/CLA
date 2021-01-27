import React from "react";
import Stars from "./Stars";

export default function CarouselItem({
  carouselClass = "carousel-item",
  label,
  text,
}) {
  return (
    <>
      <div className={carouselClass}>
        <div className="container">
          <div className="row">
           
            <div className="col align-self-center">
              <div className="card h-100">
                <div className="card-body">
                  <Stars></Stars>
                  <p className=' mt-3 card-text text-center' >{text}</p>
                  <h5>{label}</h5>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
// // "mx-auto d-block carousel-img rounded-circle"
// CLA Plumbing has the best tax experts in town, I got the best
//                     // return I've ever had excellent service strongly recommended!
