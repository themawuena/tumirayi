import PropTypes from "prop-types";
import styles from "./graph-container.module.css";

const GraphContainer = ({ className = "" }) => {
  return (
    <div className={[styles.graphContainer, className].join(" ")}>
      <div className={styles.graphTitleContainer}>
        <div className={styles.graphTitle}>
          <h3 className={styles.saleGraph}>Sale Graph</h3>
          <div className={styles.graphButton}>
            <div className={styles.button}>
              <div className={styles.graphButtonColumn}>
                <a className={styles.button1}>Weekly</a>
              </div>
            </div>
            <button className={styles.button2}>
              <div className={styles.buttonWrapper}>
                <div className={styles.button3}>Monthly</div>
              </div>
            </button>
            <button className={styles.button4}>
              <div className={styles.buttonContainer}>
                <div className={styles.button5}>Yearly</div>
              </div>
            </button>
          </div>
        </div>
        <div className={styles.graphSeparator} />
      </div>
      <img
        className={styles.graphContainerChild}
        loading="lazy"
        alt=""
        src="/group-2988.svg"
      />
      <div className={styles.recentActivity}>
        <div className={styles.activityHeader}>
          <div className={styles.roxieWardParent}>
            <div className={styles.roxieWard}>R400</div>
            <div className={styles.roxieWard1}>R300</div>
            <div className={styles.roxieWard2}>R200</div>
            <div className={styles.roxieWard3}>R100</div>
            <div className={styles.userNameTitleContainer}>
              <div className={styles.roxieWard4}>0</div>
            </div>
          </div>
          <div className={styles.activityHeaderInner}>
            <div className={styles.lineParent}>
              <div className={styles.frameChild} />
              <div className={styles.activityItems}>
                <div className={styles.activityItemContainer}>
                  <div className={styles.activityDataSeparator} />
                  <div className={styles.activityDataList} />
                  <div className={styles.activityDataList1} />
                  <div className={styles.activityDataList2} />
                  <div className={styles.roxieWard5}>JUL</div>
                  <div className={styles.roxieWard6}>AUG</div>
                  <div className={styles.roxieWard7}>NOV</div>
                  <div className={styles.roxieWard8}>DEC</div>
                  <div className={styles.activityItemIconContainer}>
                    <img
                      className={styles.lineIcon}
                      loading="lazy"
                      alt=""
                      src="/line.svg"
                    />
                    <div className={styles.activityItemDetails}>
                      <div className={styles.activityItemUserNameContai}>
                        <div className={styles.roxieWard9}>SEP</div>
                        <div className={styles.roxieWard10}>OCT</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GraphContainer.propTypes = {
  className: PropTypes.string,
};

export default GraphContainer;
