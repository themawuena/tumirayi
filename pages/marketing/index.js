import React from "react";
import styles from "./dashboard.module.css";
import Header from "../../components/Header/Header";

const Page = () => {
  return (
    <div className={styles.dashboard}>
      <main className={styles.rectangleParent}>
        <Header title={"Marketing"} />
      </main>
    </div>
  );
};

export default Page;
