import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div>
      <footer className="footer fixed-bottom bg-dark text-center text-white"  style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        {/* <!-- Grid container --> */}
        <div className="container p-4 pb-0">
          {/* <!-- Section: Social media --> */}
          <section className="mb-4">
            {/* <!-- Facebook --> */}
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#3b5998", borderRadius: "50%" }}
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>

            {/* <!-- Twitter --> */}
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#55acee" ,borderRadius: "50%" }}
              href="#!"
              role="button"
            >
              <FontAwesomeIcon  icon={faTwitter} />
            </a>

            {/* <!-- Google --> */}
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#dd4b39" ,borderRadius: "50%"}}
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon={faGoogle} />
            </a>

            {/* <!-- Instagram --> */}
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#ac2bac" ,borderRadius: "50%" }}
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            {/* <!-- Linkedin --> */}
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#0082ca",borderRadius: "50%" }}
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            {/* <!-- Github --> */}
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#333333" ,borderRadius: "50%"}}
              href="#!"
              role="button"
            >
           <FontAwesomeIcon icon={faGithub} />
            </a>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container -->

  <!-- Copyright --> */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );
}
