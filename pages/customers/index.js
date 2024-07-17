import React from "react";
import styles from "./dashboard.module.css";

const Page = () => {
  return (
    <div className={styles.dashboard}>
      <main className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.header}>
          <a className={styles.dashboard1}>Customers</a>
          <div className={styles.breadcrumb}>
            <div className={styles.homeDashboardContainer}>
              <a className={styles.homeDashboard}>{`Home > Customers`}</a>
            </div>
            <div className={styles.calendarContainer}>
              <img
                className={styles.calendarIcon}
                loading="lazy"
                alt=""
                src="/calendar.svg"
              />
              <div className={styles.months}>
                <div className={styles.oct112023}>
                  Oct 11,2023 - Nov 11,2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
