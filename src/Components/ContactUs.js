import React from "react";
import ContactUsItem from "./ContactUsItem";

export default function ContactUs() {
  return (
    <div className="container-flex container-contact-us">
      <h2 className="main-text mt-5  contact-us-header">Contac Us Today</h2>
      <div className="row container mx-auto d-flex justify-content-center container-contact-us-info shadow">
        <ContactUsItem
          spanClassName="fas fa-phone CU-logo"
          title="DIRECT PHONE #"
          content="602-800-1983"
        ></ContactUsItem>
        <ContactUsItem
          linkHref="mailto:claplumbingaz@gmail.com?Subject=PlumbingQuotation"
          toolTip="Email Us"
          spanClassName="fas fa-envelope CU-logo"
          title="EMAIL US"
          content="claplumbingaz@gmail.com"
        ></ContactUsItem>
        <ContactUsItem
          linkHref="https://www.google.com/maps/place/Phoenix,+AZ,+USA/@33.6056695,-112.405923,10z/data=!3m1!4b1!4m5!3m4!1s0x872b12ed50a179cb:0x8c69c7f8354a1bac!8m2!3d33.4483771!4d-112.0740373"
          toolTip="office location"
          spanClassName="fas fa-map-marker-alt CU-logo"
          title="OFFICE"
          content="Phoenix, AZ 85040"
        ></ContactUsItem>
        <h5 className="pb-3">Schedule A Consultation</h5>
      </div>
    </div>
  );
}
