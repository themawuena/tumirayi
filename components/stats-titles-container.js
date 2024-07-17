import PropTypes from "prop-types";
import styles from "./stats-titles-container.module.css";

const StatsTitlesContainer = ({
  className = "",
  totalOders,
  phdotsThreeVerticalBold,
  bagHandle,
  arrowUp,
}) => {
  return (
    <div className={[styles.statsTitlesContainer, className].join(" ")}>
      <div className={styles.statsTitles}>
        <a className={styles.totalOders}>{totalOders}</a>
        <img
          className={styles.phdotsThreeVerticalBoldIcon}
          loading="lazy"
          alt=""
          src={phdotsThreeVerticalBold}
        />
      </div>
      <div className={styles.statsValuesContainer}>
        <div className={styles.statsValues}>
          <div className={styles.statsComparisonIconsContain}>
            <div className={styles.statsComparisonIcons}>
              <img
                className={styles.bagHandleIcon}
                loading="lazy"
                alt=""
                src={bagHandle}
              />
            </div>
            <div className={styles.r126500}>R126.500</div>
          </div>
          <div className={styles.statsComparisonValuesContai}>
            <img className={styles.arrowUpIcon} alt="" src={arrowUp} />
            <div className={styles.emptyComparisonValues}>34.7%</div>
          </div>
        </div>
        <div className={styles.comparedToOct}>Compared to Oct 2023</div>
      </div>
    </div>
  );
};

StatsTitlesContainer.propTypes = {
  className: PropTypes.string,
  totalOders: PropTypes.string,
  phdotsThreeVerticalBold: PropTypes.string,
  bagHandle: PropTypes.string,
  arrowUp: PropTypes.string,
};

export default StatsTitlesContainer;
