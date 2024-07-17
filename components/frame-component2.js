import PropTypes from "prop-types";
import styles from "./frame-component2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={[styles.thumbnailsParent, className].join(" ")}>
      <div className={styles.thumbnails} />
      <div className={styles.thumbnailImagesWrapper}>
        <div className={styles.thumbnailImages}>
          <div className={styles.productThumbnailpng}>
            Product thumbnail.png
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.checkmarks} />
          </div>
        </div>
      </div>
      <div className={styles.checkSuccessWrapper}>
        <img
          className={styles.checkSuccessIcon}
          loading="lazy"
          alt=""
          src="/checksuccess.svg"
        />
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
