"use client";

import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer site-footer-global">
      <div className="footer-inner">

        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>kramch100@gmail.com</p>
          <p>089513 80555</p>
        </div>

        <div className="footer-col">
          <h4>Address</h4>
          <p>
            #1-57/3, Prafulla Enclave, Halady Rd, Koteshwara,
            Kundapura Tq., Udupi Dist., Karnataka – 576222
          </p>
        </div>

        <div className="footer-col social-col">
          <h4>Follow Us</h4>
          <div className="social-row">
            <a className="social-link" href="https://www.instagram.com/kundapura_rural_ayurveda" target="_blank">
              <FaInstagram className="social-icon-svg" />
            </a>
            <a className="social-link" href="https://youtube.com/@kundapuraruralayurveda" target="_blank">
              <FaYoutube className="social-icon-svg" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
