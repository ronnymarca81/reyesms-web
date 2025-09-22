import React from "react";
import { menuItems } from "@components/layout/ServiceApi";
import { NavBar } from "./NavBar";

// Example usage
const Header: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <NavBar
        menuItems={menuItems}
      />
    </div>
  );
};

export default Header;
