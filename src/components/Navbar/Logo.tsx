import React from "react";
import styles from "./Navbar.module.css";
import { BuildingIcon } from "./icons";

interface LogoProps {
  brandName: string;
}

const Logo: React.FC<LogoProps> = ({ brandName }) => {
  return (
    <div className={styles["navbar-logo"]}>
      <div className={styles["logo-icon"]}>
        <BuildingIcon className={styles["building-icon"]} />
        <div className={styles["crown"]}>👑</div>
      </div>
      <div className={styles["logo-text"]}>
        <span className={styles["brand-name"]}>{brandName}</span>
      </div>
    </div>
  );
};

export default Logo;
