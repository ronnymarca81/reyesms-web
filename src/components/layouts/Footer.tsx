import React from "react";
import "./Footer.css"; // Assuming you have a CSS file for Footer styles
import { defaultContactInfo, defaultBrandName } from "../Navbar/types";
import Logo from "../Navbar/Logo";
import { PhoneCall, Mail, Globe } from "lucide-react";

interface FooterProps {
  className?: string;
}
const contact = defaultContactInfo;
const brandName = defaultBrandName;

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="footer-content">
        {/* Company Info Section */}
        <div className="footer-section company-info">
          <Logo brandName={brandName} />

          <p className="company-description">{contact.companyDescription}</p>

          <p className="company-cta">{contact.companyCuenta}</p>
        </div>

        {/* Helpful Links Section */}
        <div className="footer-section">
          <h3 className="section-title">Helpful Links</h3>
          <ul className="footer-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/quote">Request a Quote</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Our Services Section */}
        <div className="footer-section">
          <h3 className="section-title">Our Services</h3>
          <ul className="footer-links">
            <li>
              <a href="/services/disinfecting">Disinfecting Services</a>
            </li>
            <li>
              <a href="/services/janitorial">Janitorial Services</a>
            </li>
            <li>
              <a href="/services/commercial">Commercial Cleaning</a>
            </li>
            <li>
              <a href="/services/office">Office Cleaning</a>
            </li>
            <li>
              <a href="/services/building-maintenance">Building Maintenance</a>
            </li>
            <li>
              <a href="/services/construction">Construction Cleaning</a>
            </li>
            <li>
              <a href="/services/condominium">Condominium Cleaning</a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section">
          <h3 className="section-title">Contact Us</h3>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon phone-icon">
                <PhoneCall className="text-white stroke-3"/>
              </div>
              <a href="tel:613-209-8861" className="contact-link">
                {contact.phone}
              </a>
            </div>
            <div className="contact-item">
              <div className="contact-icon email-icon">
                <Mail className="text-white stroke-3" />
              </div>
              <a href={`mailto:${contact.email}`} className="contact-link">
                {brandName}
              </a>
            </div>
            <div className="contact-item">
              <div className="contact-icon social-icon">
                <Globe />
              </div>
              <a
                href={contact.socialLinks.facebook}
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {brandName} on Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="copyright">
          ©Copyright 2025 {brandName} –
          <a href="/web-design" className="footer-link">
            {" "}
            Web Design
          </a>{" "}
          Marlov
          <a href="/privacy-policy" className="footer-link">
            {" "}
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
