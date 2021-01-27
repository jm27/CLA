import React from "react";
import Header from "../Components/Header";
import Image from "../Components/Image";
// import images
import notFound from "../utilities/imgs/error-404.jpg";

export default function GenericNotFound() {
  return (
    <div>
      <Header></Header>
      <Image
        imgSrc={notFound}
        imgClassName="img-about-soon"
        imgAlt="Not found CLA Plumbinges"
      ></Image>
    </div>
  );
}
