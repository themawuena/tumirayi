import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./frame-component3.module.css";

const FrameComponent1 = ({
  className = "",
  productName,
  placeholderPlaceholder,
  propAlignSelf,
  propFlex,
  propMinWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propFlex, propMinWidth]);

  return (
    <div
      className={[styles.productNameParent, className].join(" ")}
      style={frameDivStyle}
    >
      <a className={styles.productName}>{productName}</a>
      <div className={styles.inputFields}>
        <div className={styles.inputinitialParent}>
          <div className={styles.inputinitial}>
            <input
              className={styles.placeholder}
              placeholder={placeholderPlaceholder}
              type="text"
            />
          </div>
          <div className={styles.helperTextHere}>Helper text here</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  productName: PropTypes.string,
  placeholderPlaceholder: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default FrameComponent1;
