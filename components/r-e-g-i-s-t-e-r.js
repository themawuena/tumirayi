import PropTypes from "prop-types";
import styles from "./r-e-g-i-s-t-e-r.module.css";

const REGISTER = ({ className = "" }) => {
  return (
    <div className={[styles.register, className].join(" ")}>
      <div className={styles.tumirayi3Wrapper}>
        <img
          className={styles.tumirayi3Icon}
          loading="lazy"
          alt=""
          src="/tumirayi-3@2x.png"
        />
      </div>
      <div className={styles.accountInfo}>
        <div className={styles.credentials}>
          <div className={styles.inputFields}>
            <div className={styles.registerInput}>
              <b className={styles.register1}>Register</b>
            </div>
            <div className={styles.createANew}>Create a new account</div>
          </div>
          <div className={styles.fieldsWrapper}>
            <div className={styles.fields}>
              <div className={styles.hover}>
                <img
                  className={styles.objectIcon}
                  alt=""
                  src="/object@2x.png"
                />
                <div className={styles.fullName}>Full Name</div>
              </div>
              <div className={styles.fullname}>
                <img
                  className={styles.objectIcon1}
                  loading="lazy"
                  alt=""
                  src="/object-1@2x.png"
                />
                <div className={styles.fullName1}>Full Name</div>
              </div>
              <div className={styles.email}>
                <img
                  className={styles.objectIcon2}
                  loading="lazy"
                  alt=""
                  src="/object-1@2x.png"
                />
                <div className={styles.emailAddress}>Email Address</div>
              </div>
              <div className={styles.password}>
                <img
                  className={styles.objectIcon3}
                  loading="lazy"
                  alt=""
                  src="/object-1@2x.png"
                />
                <div className={styles.password1}>Password</div>
              </div>
            </div>
          </div>
          <div className={styles.agreement}>
            <div className={styles.termsConditions}>
              <div className={styles.div}></div>
              <input className={styles.object} type="checkbox" />
              <div className={styles.iAcceptTermsContainer}>
                <span className={styles.iAcceptTermsContainer1}>
                  <span>{`I accept `}</span>
                  <span
                    className={styles.termsConditions1}
                  >{`Terms & Conditions`}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.button}>
        <div className={styles.buttonBg} />
        <b className={styles.inbox}>Register</b>
      </button>
      <div className={styles.loginOption}>
        <div className={styles.alreadyHaveAnContainer}>
          <span
            className={styles.alreadyHaveAn}
          >{`Already have an Account?  `}</span>
          <span className={styles.loginHere}>Login Here</span>
        </div>
      </div>
    </div>
  );
};

REGISTER.propTypes = {
  className: PropTypes.string,
};

export default REGISTER;
