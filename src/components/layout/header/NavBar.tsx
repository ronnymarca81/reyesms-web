import React, { useState } from "react";
import type { NavBarProps } from "@components/layout/types";
import Logo from "./Logo";
import { Button } from "./Button";
import { NavMenu } from "./NavMenu";
import { defaultContactInfo } from "@myTypes/ServiceApi";

import { Phone, TextAlignEnd, X } from "lucide-react";

export const NavBar: React.FC<NavBarProps> = ({ menuItems }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const handlePhoneClick = () =>
    (window.location.href = `tel:${defaultContactInfo.phone}`);

  return (
    //<header className="bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 shadow-lg relative z-50">
    <header
      className={`bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] text-white pt-10 md:pt-16`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavMenu items={menuItems} />
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="md" href="/quote">
              GET A QUOTE
            </Button>
            <Button variant="phone" size="md" onClick={handlePhoneClick}>
              <Phone className="w-4 h-4 mr-2 stroke-3" />
              {defaultContactInfo.phone}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-cyan-400 focus:outline-none focus:text-cyan-400 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <TextAlignEnd className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-700 py-4">
            <div className="flex flex-col space-y-4">
              <NavMenu
                items={menuItems}
                isMobile={true}
                onItemClick={closeMobileMenu}
              />

              {/* Mobile Action Buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-700">
                <Button
                  variant="outline"
                  size="md"
                  className="w-full"
                  href="/quote"
                >
                  GET A QUOTE
                </Button>
                <Button
                  variant="phone"
                  size="md"
                  className="w-full"
                  onClick={handlePhoneClick}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {defaultContactInfo.phone}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
