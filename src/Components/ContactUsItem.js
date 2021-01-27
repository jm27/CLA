import React from "react";

export default function ContactUsItem({
    linkHref='tel:602-800-1983',
    toolTip='Give us a call',
  spanClassName = "fab",
  title = "phone",
  content = "702-123-4567",
}) {
  return (
    <div className="col-md-4 col-12 mr-3 ml-3 pt-5 pb-4 text-center justify-content-center d-flex">
        <a
                className="nav-link"
                href={linkHref}
                target="_blank"
                rel="noopener noreferrer"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title={toolTip}
              >
      <span className={spanClassName}></span>
      
      <h6 className="main-content CU-title mt-3">{title}</h6>
      <h6 className="main-content CU-content mt-2">{content}</h6>
      </a>
    </div>
  );
}
