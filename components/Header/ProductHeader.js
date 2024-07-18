import React from "react";
import PropTypes from "prop-types";
import styles from "./productheader.module.css";
import Link from "next/link";

const Header = ({ title = "Page Title" }) => {
  return (
    <>
      <div className={styles.frameChild} />
      <div className={styles.header}>
        <div className={styles.pageTitleContainer}>
          <a className={styles.pageTitle}>{title}</a>
          <div className={styles.breadcrumb}>
            <div className={styles.breadContainer}>
              <a className={styles.breadTitle}>{`Home > ${title}`}</a>
            </div>
          </div>
        </div>
        <div className={styles.user}>
          <div className={styles.AddButton}>
            <img
              className={styles.calendarIcon}
              loading="lazy"
              alt=""
              src="/Add_circle.svg"
            />
            <Link href="/product/new" className={styles.Buttontitle}>ADD NEW PRODUCT</Link>
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
