import React, { useState, useCallback } from "react";
import {
  type NavbarProps,
  defaultContactInfo,
  defaultNavItems,
  defaultBrandName,
} from "./types";
import { NavItems } from "./NavItems";
import { Contact } from "./Contact";
import styles from "./Navbar.module.css"; // assuming you keep styles in Navbar.module.css
import Logo from "./Logo";


const Navbar: React.FC<NavbarProps> = ({
  brandName = defaultBrandName,
  contactInfo = defaultContactInfo,
  navItems = defaultNavItems,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

 const handleDropdownLeave = useCallback(() => {
    setActiveDropdown(null);
  }, []);
  
    return (
      <>
        <nav className={styles["navbar"]} onMouseLeave={handleDropdownLeave}>
          <div className={styles["navbar-container"]}>
            {/* Logo Section */}
            <Logo brandName={brandName} />
            {/* Navigation Menu */}
            <div className={styles["navbar-menu"]}>
              {navItems.map((item) => (
                <NavItems
                  key={item.label}
                  item={item}
                  activeDropdown={activeDropdown}
                  setActiveDropdown={setActiveDropdown}
                />
              ))}
            </div>
            {/* Contact Section */}
            <Contact contactInfo={contactInfo} />
          </div>
        </nav>
      </>
    );
};

export default Navbar;
