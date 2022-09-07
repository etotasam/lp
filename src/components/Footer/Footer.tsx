import React from "react";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.test}>footer</div>

      <svg className={styles.svg} width="88" height="88" viewBox="0 0 88 88">
        <circle className={`${styles.circle}`} cx="44" cy="44" r="42" />
      </svg>
    </footer>
  );
};
