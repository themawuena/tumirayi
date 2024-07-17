import FrameComponent1 from "./frame-component1";
import PropTypes from "prop-types";
import styles from "./product-input-fields.module.css";

const ProductInputFields = ({ className = "" }) => {
  return (
    <div className={[styles.productInputFields, className].join(" ")}>
      <FrameComponent1
        productName="Product Name"
        placeholderPlaceholder="Lorem Ipsum"
      />
      <div className={styles.descriptionParent}>
        <a className={styles.description}>Description</a>
        <textarea
          className={styles.inputFields}
          placeholder="Lorem Ipsum Is A Dummy Text"
          rows={9}
          cols={28}
        />
      </div>
      <FrameComponent1
        productName="Category"
        placeholderPlaceholder="Sneaker"
        propAlignSelf="stretch"
        propFlex="unset"
        propMinWidth="unset"
      />
      <FrameComponent1
        productName="Brand Name"
        placeholderPlaceholder="Addidas"
        propAlignSelf="stretch"
        propFlex="unset"
        propMinWidth="unset"
      />
      <div className={styles.frameParent}>
        <FrameComponent1
          productName="SKU"
          placeholderPlaceholder="#32A53"
          propAlignSelf="unset"
          propFlex="1"
          propMinWidth="173px"
        />
        <div className={styles.stockQ}>
          <div className={styles.stockQuantity}>Stock Quantity</div>
          <div className={styles.inputFields1}>
            <div className={styles.inputinitialParent}>
              <div className={styles.inputinitial}>
                <div className={styles.placeholder}>211</div>
              </div>
              <div className={styles.helperTextHere}>Helper text here</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.regularPriceParent}>
        <FrameComponent1
          productName="Regular Price"
          placeholderPlaceholder="R110.40"
          propAlignSelf="unset"
          propFlex="1"
          propMinWidth="173px"
        />
        <FrameComponent1
          productName="Sale Price"
          placeholderPlaceholder="R450"
          propAlignSelf="unset"
          propFlex="1"
          propMinWidth="173px"
        />
      </div>
      <div className={styles.tag}>
        <div className={styles.tag1}>Tag</div>
        <div className={styles.inputFields2}>
          <div className={styles.tagInputContainer}>
            <div className={styles.inputinitial1}>
              <div className={styles.tagsContainer}>
                <div className={styles.tags}>
                  <div className={styles.badge}>Lorem</div>
                </div>
                <div className={styles.tags1}>
                  <div className={styles.badge1}>Lorem</div>
                </div>
              </div>
            </div>
            <div className={styles.helperTextHere1}>Helper text here</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductInputFields.propTypes = {
  className: PropTypes.string,
};

export default ProductInputFields;
