import React from "react";

export default function Modal() {
  return (
    <div
      className="modal modal-main"
      tabIndex="-1"
      id="main-modal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">Contact Us</h3>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body d-flex justify-content-evenly">
            <h4 className="modal-phone">
            <a
              className="nav-link modal-phone"
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
            <h2 className="footer-h">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Check our facebook page"
              >
                <i className="fab fac-modal fa-facebook-f"></i>
              </a>
            </h2>
            <h2 className="footer-h">
              <a
                href="mailto:claplumbingaz@gmail.com?Subject=Tax"
                target="_blank"
                rel="noopener noreferrer"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Send us an E-mail"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </h2>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
