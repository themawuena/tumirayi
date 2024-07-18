import React from "react";
import PropTypes from "prop-types";
import styles from "./header.module.css";

const Header = ({ title = "Kkksks" }) => {
  return (
    <>
      <div className={styles.frameChild} />
      <div className={styles.header}>
        <a className={styles.pageTitle}>{title}</a>
        <div className={styles.breadcrumb}>
          <div className={styles.breadContainer}>
            <a className={styles.breadTitle}>{`Home > ${title}`}</a>
          </div>
          <div className={styles.calendarContainer}>
            <img
              className={styles.calendarIcon}
              loading="lazy"
              alt=""
              src="/calendar.svg"
            />
            <div className={styles.months}>
              <div className={styles.oct112023}>Oct 11,2023 - Nov 11,2022</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
