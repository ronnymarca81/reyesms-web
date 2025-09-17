import React from "react";
import type { NavItem as NavItemType } from "./types";
import { ChevronDownIcon } from "./icons";
import  Dropdown  from "./Dropdown";
import styles from "./Navbar.module.css"; // assuming you keep styles in Navbar.module.css
import { useNavigate } from "react-router-dom";

interface NavItemProps {
  item: NavItemType;
  activeDropdown: string | null;
  setActiveDropdown: (menu: string | null) => void;
}


export const NavItems: React.FC<NavItemProps> = ({
  item,
  activeDropdown,
  setActiveDropdown,
}) => {
  const handleMouseEnter = () => {
    if (item.dropdown) setActiveDropdown(item.label.toLowerCase());  
  };
   const navigate = useNavigate();
   const handleClick = (e: React.MouseEvent) => {
     if (item.onClick) {
       e.preventDefault(); // prevent default link behavior if custom click provided
       item.onClick();
     } else if (item.href.startsWith("/")) {
       e.preventDefault(); // prevent default link behavior
       navigate(item.href); // use navigate from react-router-dom
     }
   };

  return (
    <div
      className={`${styles["nav-item"]} ${item.dropdown ? styles["dropdown"] : ""}`}
      onMouseEnter={handleMouseEnter}
    >
      <a href={item.href} className={styles["nav-link"]} onClick={handleClick}>
        {item.label}
        {item.dropdown && <ChevronDownIcon className={styles["dropdown-icon"]} />}
      </a>
      {item.dropdown && activeDropdown === item.label.toLowerCase() && (
        <Dropdown items={item.dropdown} />
      )}
    </div>
  );
};
