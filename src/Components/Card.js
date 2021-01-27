import React from "react";
import Image from "./Image";

export default function Card({
  title = " Hello ",
  cardText = "word",
  imgSrc,
  imgAlt,
  imgClassName = "card-img-top",
}) {
  return (
    <div className="col-sm-4 py-2">
      <div className="card h-100">
        <Image
          imgSrc={imgSrc}
          imgClassName={imgClassName}
          imgAlt={imgAlt}
        ></Image>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{cardText}</p>
        </div>
      </div>
    </div>
  );
}
