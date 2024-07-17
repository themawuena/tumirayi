import PropTypes from "prop-types";
import styles from "./best-seller-items.module.css";

const BestSellerItems = ({ className = "" }) => {
  return (
    <div className={[styles.bestSellerItems, className].join(" ")}>
      <div className={styles.bestSellerItemContainers}>
        <div className={styles.productImagePlaceholders} />
        <div className={styles.productDetailsContainers}>
          <div className={styles.productDetails}>
            <div className={styles.loremIpsum}>Lorem Ipsum</div>
            <div className={styles.r126500}>R126.500</div>
          </div>
        </div>
      </div>
      <div className={styles.productSalesContainers}>
        <div className={styles.productSales}>
          <div className={styles.r12650}>R126.50</div>
          <div className={styles.sales}>999 sales</div>
        </div>
      </div>
    </div>
  );
};

BestSellerItems.propTypes = {
  className: PropTypes.string,
};

export default BestSellerItems;
