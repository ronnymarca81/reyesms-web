import React from "react";
import {
  defaultContactInfo,
  defaultBrandName,
  defaultLastName
} from "@myTypes/CompanyApi";
import { menuItems } from "../../../myTypes/MenuApi";
import Logo from "@components/layout/header/Logo";
import { PhoneCall, Mail } from "lucide-react";
import { FacebookIcon } from "@components/layout/icons";
import { Button } from "@components/common/Button";

interface FooterProps {
  className?: string;
}

const contact = defaultContactInfo;
const brandName = defaultBrandName;
const brandLastName = defaultLastName;

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer
      className={`bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] text-white pt-10 md:pt-16 ${className}`}
    >
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-10">
        {/* Company Info */}
        <div className="flex flex-col max-w-md sm:col-span-2 md:col-span-1">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <p className="text-gray-200 leading-relaxed mt-3">
            {contact.companyCuenta}
          </p>
          <Button
            variant="custom"
            size="md"
            className="w-full mt-2 bg-red-600 text-white hover:bg-transparent hover:border-2"
            href="/quote"
          >
            GET A QUOTE
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-5">Helpful Links</h3>
          <ul className="space-y-3">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-5">Our Services</h3>
          <ul className="space-y-3">
            {menuItems
              .find((item) => item.href === "/services")
              ?.subItems?.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-blue-400"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
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
              <FacebookIcon className="w-5 h-5 text-white" stroke-3 />
              <a
                href={contact.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400"
              >
                {brandName}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 py-5 text-center">
        <p className="text-sm text-gray-400 px-4">
          © 2025 {brandName} {brandLastName} –{" "}
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
