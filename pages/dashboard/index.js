// import Menu from "../../../components/menu";
import StatsTitlesContainer from "../../components/stats-titles-container";
import GraphContainer from "../../components/graph-container";
import BestSellerItems from "../../components/best-seller-items";
import OrderList from "../../components/order-list";
import styles from "./dashboard.module.css";

const Page = () => {
  return (
    <div className={styles.dashboard}>
      <main className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.header}>
          <a className={styles.dashboard1}>Order</a>
          <div className={styles.breadcrumb}>
            <div className={styles.homeDashboardContainer}>
              <a
                className={styles.homeDashboard}
              >{`Home > Order Management`}</a>
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
        <nav className={styles.orderStats}>
          <StatsTitlesContainer
            totalOders="Total Oders"
            phdotsThreeVerticalBold="/phdotsthreeverticalbold1.svg"
            bagHandle="/bag-handle.svg"
            arrowUp="/arrow-up1.svg"
          />
          <StatsTitlesContainer
            totalOders="Active Orders"
            phdotsThreeVerticalBold="/phdotsthreeverticalbold-1.svg"
            bagHandle="/bag-handle-1.svg"
            arrowUp="/arrow-up-1.svg"
          />
          <StatsTitlesContainer
            totalOders="Completed Orders"
            phdotsThreeVerticalBold="/phdotsthreeverticalbold1.svg"
            bagHandle="/bag-handle.svg"
            arrowUp="/arrow-up1.svg"
          />
          <StatsTitlesContainer
            totalOders="Return Orders"
            phdotsThreeVerticalBold="/phdotsthreeverticalbold-1.svg"
            bagHandle="/bag-handle-1.svg"
            arrowUp="/arrow-up-1.svg"
          />
        </nav>
        <section className={styles.graphContainerParent}>
          <GraphContainer />
          <div className={styles.bestSellersContainerParent}>
            <div className={styles.bestSellersContainer}>
              <div className={styles.bestSellersHeader}>
                <h3 className={styles.bestSellers}>Best Sellers</h3>
                <img
                  className={styles.phdotsThreeVerticalBoldIcon}
                  loading="lazy"
                  alt=""
                  src="/phdotsthreeverticalbold-1.svg"
                />
              </div>
              <div className={styles.bestSellersList}>
                <div className={styles.bestSellersSeparator} />
                <BestSellerItems />
                <BestSellerItems />
                <BestSellerItems />
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.viewMoreButtonContainer}>
                <div className={styles.button1}>Report</div>
              </div>
            </div>
          </div>
        </section>
        <OrderList />
      </main>
    </div>
  );
};

export default Page;
