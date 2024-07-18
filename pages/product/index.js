import FrameComponent from "../../components/frame-component";
import Header from "../../components/Header/ProductHeader";
import styles from "./products.module.css";

const Page = () => {
  return (
    <div className={styles.products}>
      <main className={styles.rectangleParent}>
        <Header title="Products" />
        <section className={styles.frameParent}>
          <div className={styles.productGrid}>
            <FrameComponent />
            <FrameComponent />
            <FrameComponent />
          </div>
        </section>
        <section className={styles.productGridTwo}>
          <div className={styles.productRowTwo}>
            <FrameComponent />
            <FrameComponent />
            <FrameComponent />
          </div>
        </section>
        <div className={styles.buttonParent}>
          <div className={styles.button2}>
            <div className={styles.buttonWrapper}>
              <div className={styles.button3}>1</div>
            </div>
          </div>
          <div className={styles.button4}>
            <div className={styles.buttonContainer}>
              <div className={styles.button5}>2</div>
            </div>
          </div>
          <div className={styles.button6}>
            <div className={styles.buttonFrame}>
              <div className={styles.button7}>3</div>
            </div>
          </div>
          <div className={styles.button8}>
            <div className={styles.frameDiv}>
              <div className={styles.button9}>4</div>
            </div>
          </div>
          <div className={styles.button10}>...</div>
          <div className={styles.button11}>
            <div className={styles.buttonWrapper1}>
              <div className={styles.button12}>10</div>
            </div>
          </div>
          <button className={styles.button13}>
            <div className={styles.nextButtonContainer}>
              <div className={styles.button14}>Next</div>
              <img
                className={styles.chevronForwardIcon}
                alt=""
                src="/chevron-forward.svg"
              />
            </div>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Page;
