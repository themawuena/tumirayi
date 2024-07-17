import FrameComponent from "../../components/frame-component";
import styles from "./products.module.css";

const Page = () => {
  return (
    <div className={styles.products}>
      <main className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.header}>
          <a className={styles.dashboard1}>Order</a>
          <div className={styles.breadcrumb}>
            <div className={styles.homeDashboardContainer}>
              <a className={styles.homeDashboard}>{`Home > Report`}</a>
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
