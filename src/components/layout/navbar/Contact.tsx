import React from "react";
import type { ContactInfo } from "./types";
import { MailIcon, FacebookIcon, PhoneIcon } from "./icons";
import styles from "./Navbar.module.css"; // assuming you keep styles in Navbar.module.css

interface ContactButtonsProps {
  contactInfo: ContactInfo;
}

export const Contact: React.FC<ContactButtonsProps> = ({ contactInfo }) => {
  const handlePhoneClick = () =>
    (window.location.href = `tel:${contactInfo.phone}`);

  const isEmailEnabled = true;

  const handleEmailClick = () => {
    if (isEmailEnabled) {
      console.log("Email click enabled");
      window.location.href = `mailto:${contactInfo.email}?subject=Inquiry&body=Hello, I’d like to know more...`;
    } else {
      console.log("Email click disabled");
    }
  };
    //(window.location.href = `mailto:${contactInfo.email}`);
  const handleSocialClick = () =>
    window.open(
      contactInfo.socialLinks.facebook,
      "_blank",
      "noopener,noreferrer"
    );

  return (
    <div className={styles["navbar-contact"]}>
      <button
        className={styles["contact-info"]}
        onClick={handleEmailClick}
        type="button"
        aria-label={`Send email to ${contactInfo.email}`}
      >
        <MailIcon />
        <span>{contactInfo.email}</span>
      </button>

      <button
        className={styles["social-icon"]}
        onClick={handleSocialClick}
        type="button"
        aria-label="Visit Facebook page"
      >
        <FacebookIcon />
      </button>

      <button
        className={styles["phone-btn"]}
        onClick={handlePhoneClick}
        type="button"
        aria-label={`Call ${contactInfo.phone}`}
      >
        <PhoneIcon />
        {contactInfo.phone}
      </button>
    </div>
  );
};
