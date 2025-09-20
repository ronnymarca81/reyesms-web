import React from "react";
import { defaultContactInfo, defaultBrandName } from "../navbar/types";
import Logo from "../navbar/Logo";
import { PhoneCall, Mail, Globe } from "lucide-react";

interface FooterProps {
  className?: string;
}

const contact = defaultContactInfo;
const brandName = defaultBrandName;

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer
      className={`bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] text-white pt-10 md:pt-16 ${className}`}
    >
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-10">
        {/* Company Info */}
        <div className="flex flex-col max-w-md sm:col-span-2 md:col-span-1">
          <Logo brandName={brandName} />

          <p className="text-gray-200 leading-relaxed mt-4">
            {contact.companyDescription}
          </p>

          <p className="text-gray-200 leading-relaxed mt-3">
            {contact.companyCuenta}
          </p>
        </div>

        {/* Helpful Links */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-5">Helpful Links</h3>
          <ul className="space-y-3">
            <li>
              <a href="/" className="text-gray-300 hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-300 hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="/blog" className="text-gray-300 hover:text-blue-400">
                Blog
              </a>
            </li>
            <li>
              <a href="/quote" className="text-gray-300 hover:text-blue-400">
                Request a Quote
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-300 hover:text-blue-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-5">Our Services</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="/services/disinfecting"
                className="text-gray-300 hover:text-blue-400"
              >
                Disinfecting Services
              </a>
            </li>
            <li>
              <a
                href="/services/janitorial"
                className="text-gray-300 hover:text-blue-400"
              >
                Janitorial Services
              </a>
            </li>
            <li>
              <a
                href="/services/commercial"
                className="text-gray-300 hover:text-blue-400"
              >
                Commercial Cleaning
              </a>
            </li>
            <li>
              <a
                href="/services/office"
                className="text-gray-300 hover:text-blue-400"
              >
                Office Cleaning
              </a>
            </li>
            <li>
              <a
                href="/services/building-maintenance"
                className="text-gray-300 hover:text-blue-400"
              >
                Building Maintenance
              </a>
            </li>
            <li>
              <a
                href="/services/construction"
                className="text-gray-300 hover:text-blue-400"
              >
                Construction Cleaning
              </a>
            </li>
            <li>
              <a
                href="/services/condominium"
                className="text-gray-300 hover:text-blue-400"
              >
                Condominium Cleaning
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-5">Contact Us</h3>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <PhoneCall className="w-5 h-5 text-white" />
              <a
                href={`tel:${contact.phone}`}
                className="text-gray-300 hover:text-blue-400"
              >
                {contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <Mail className="w-5 h-5 text-white" />
              <a
                href={`mailto:${contact.email}`}
                className="text-gray-300 hover:text-blue-400"
              >
                {brandName}
              </a>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <Globe className="w-5 h-5 text-white" />
              <a
                href={contact.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400"
              >
                {brandName} on Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 py-5 text-center">
        <p className="text-sm text-gray-400 px-4">
          © 2025 {brandName} –{" "}
          <a href="/web-design" className="text-blue-400 hover:text-blue-300">
            Web Design
          </a>{" "}
          Marlov –{" "}
          <a
            href="/privacy-policy"
            className="text-blue-400 hover:text-blue-300"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
