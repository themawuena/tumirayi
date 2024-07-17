import PropTypes from "prop-types";
import styles from "./frame-component.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.productCardItemsParent, className].join(" ")}>
      <div className={styles.productCardItems}>
        <img
          className={styles.cardTopIcon}
          loading="lazy"
          alt=""
          src="/rectangle-10@2x.png"
        />
        <div className={styles.cardDetails}>
          <div className={styles.productInfo}>
            <div className={styles.productName}>
              <div className={styles.adidasUltraBoost}>Lorem Ipsum</div>
              <div className={styles.sneaker}>Battery</div>
            </div>
            <img
              className={styles.phdotsThreeVerticalBoldIcon}
              loading="lazy"
              alt=""
              src="/phdotsthreeverticalbold@2x.png"
            />
          </div>
          <div className={styles.empty}>R110.40</div>
        </div>
      </div>
      <div className={styles.productSummary}>
        <div className={styles.summary}>Summary</div>
        <div className={styles.longDistanceRunning}>
          Lorem ipsum is placeholder text commonly used in the graphic.
        </div>
      </div>
      <div className={styles.productSales}>
        <div className={styles.salesData}>
          <div className={styles.sales}>Sales</div>
          <div className={styles.salesGrowth}>
            <div className={styles.arrowUpWrapper}>
              <img className={styles.arrowUpIcon} alt="" src="/arrow-up.svg" />
            </div>
            <div className={styles.empty1}>1269</div>
          </div>
        </div>
        <div className={styles.salesDivider} />
        <div className={styles.remainingInventory}>
          <div className={styles.remainingProducts}>Remaining Products</div>
          <div className={styles.inventoryBars}>
            <div className={styles.inventoryProgress}>
              <div className={styles.inventoryFill}>
                <div className={styles.fillBar} />
                <div className={styles.emptyFill} />
              </div>
            </div>
            <div className={styles.empty2}>1269</div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
