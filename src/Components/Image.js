import React from "react";

export default function Image({ imgSrc, imgClassName, imgAlt }) {
  return (
    <>
      <img src={imgSrc} className={imgClassName} alt={imgAlt} />
    </>
  );
}
