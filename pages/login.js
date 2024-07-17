import REGISTER from "../components/r-e-g-i-s-t-e-r";
import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.loginChild} />
      <div className={styles.bgParent}>
        <div className={styles.bg} />
        <REGISTER />
      </div>
    </div>
  );
};

export default Login;
