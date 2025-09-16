import React from "react";
import styles from "./Navbar.module.css"; // assuming you keep styles in Navbar.module.css
import type { DropdownItem } from "./types";

interface DropdownProps {
  items: DropdownItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  return (
    <div className={styles["dropdown-menu"]}>
      {items.map((item) => (
        <a key={item.href} href={item.href} className={styles["dropdown-item"]}>
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default Dropdown;
