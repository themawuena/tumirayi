import React from "react";
import PropTypes from "prop-types";
import styles from "./userheader.module.css";

const Header = ({ title = "Kkksks" }) => {
  return (
    <>
      <div className={styles.frameChild} />
      <div className={styles.header}>
        <a className={styles.pageTitle}>{title}</a>
        <div className={styles.user}>
          <img
            className={styles.calendarIcon}
            loading="lazy"
            alt=""
            src="/bell.svg"
          />
          <div className={styles.profile}></div>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
