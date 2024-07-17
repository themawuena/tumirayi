import FrameComponent2 from "./frame-component2";
import PropTypes from "prop-types";
import styles from "./frame-component1.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.imagePlaceholderWrapper}>
        <div className={styles.imagePlaceholder} />
      </div>
      <div className={styles.productGalleryParent}>
        <div className={styles.productGallery}>Product Gallery</div>
        <div className={styles.parent} required={true}>
          <label className={styles.label} for="file-9:6091">
            <img
              className={styles.phimageLightIcon}
              loading="lazy"
              alt=""
              src="/phimagelight.svg"
            />
            <div className={styles.uploadInstructions}>
              <div className={styles.dropYourImager}>
                Drop your imager here, or browse
              </div>
              <div className={styles.jpegPngAre}>Jpeg, png are allowed</div>
            </div>
          </label>
          <input className={styles.input} type="file" id="file-9:6091" />
        </div>
      </div>
      <FrameComponent2 />
      <FrameComponent2 />
      <div className={styles.buttonParent}>
        <button className={styles.button}>
          <div className={styles.styleLayer}>
            <div className={styles.button1}>Update</div>
          </div>
        </button>
        <div className={styles.button2}>
          <div className={styles.styleLayer1}>
            <div className={styles.button3}>Delete</div>
          </div>
        </div>
        <button className={styles.button4}>
          <div className={styles.styleLayer2}>
            <div className={styles.button5}>Cancel</div>
          </div>
        </button>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
