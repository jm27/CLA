import React from "react";

export default function Button({
  text = "Get Quotation",
  dataToggle = "modal",
  dataTarget = "#main-modal",
  className = "btn btn-outline-primary btn-lg main-btn",
}) {
  return (
    <button
      type="button"
      className={className}
      data-bs-toggle={dataToggle}
      data-bs-target={dataTarget}
    >
      {text}
    </button>
  );
}
