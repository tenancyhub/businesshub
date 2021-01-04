import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-3 col-sm">
            <h4>About</h4>
            <p>
              Tenancy hub is an online global platform that connects customer
              and buyers with convenience. We aim to bring back fun and easy of
              doing business. Sell at any time, any place at your own pace!
            </p>
            <ul className="d-flex">
              <li>
                <i className="fab fa-facebook"></i>
              </li>
              <li>
                <i className="fab fa-linkedin"></i>
              </li>
              <li>
                <i className="fab fa-instagram"></i>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-3 col-sm">
            <div className="foot-courses-list">
              <h4>Contact</h4>
              <ul className="d-inline-block text-default">
                <li>
                  <a href="mailto:yusufsaheedtaiwo@gmail.com">
                    yusufsaheedtaiwo@gmail.com
                  </a>
                </li>
                <li>
                  <a href="mailto:writeshittu@gmai.com">For support</a>
                </li>
                <li>
                  <a href="mailto:yusufsaheedtaiwo@gmail.com">Inquiries</a>
                </li>
                <li>
                  <a href="mailto:yusufsaheedtaiwo@gmail.com">
                    careers@tenancyhub.co
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm">
            <div className="foot-courses-list">
              <h4>Quick Links</h4>
              <ul>
                <li>About Us</li>
                <li>Meet the Team</li>
                <li>Plans</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
