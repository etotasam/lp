import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./animationTest.module.scss";
import Bowser from "bowser";

gsap.registerPlugin(ScrollTrigger);

export const AnimationTest = () => {
  //? device情報の取得
  const browser = Bowser.getParser(navigator.userAgent);
  const isIOS = browser.getOS().name === `iOS`;
  const isChrome = browser.getBrowser().name === `Chrome`;

  const [testEl, setTestEl] = useState<HTMLDivElement>();
  useEffect(() => {
    const test = document.querySelector(`.${styles["test"]}`) as HTMLDivElement;
    setTestEl(test);
  }, []);

  const click = () => {
    if (!testEl) return;
    if (isIOS && isChrome) {
      if (testEl.classList.contains(`${styles["chrome-active"]}`)) {
        testEl.classList.remove(`${styles["chrome-active"]}`);
      } else {
        testEl.classList.add(`${styles["chrome-active"]}`);
      }
    } else {
      if (testEl.classList.contains(`${styles["rotate"]}`)) {
        testEl.classList.remove(`${styles["rotate"]}`);
      } else {
        testEl.classList.add(`${styles["rotate"]}`);
      }
    }
  };

  // const [animeState, setAnimeState] = useState(false);
  // useEffect(() => {
  //   if (!testEl) return;
  //   if (animeState) {
  //     gsap.to(testEl, {
  //       y: 50,
  //       duration: 1,
  //     });
  //   } else {
  //     gsap.to(testEl, {
  //       y: 0,
  //       duration: 1,
  //     });
  //   }
  // }, [animeState]);
  return (
    <div>
      <div className={`${styles["test"]}`}>てすと</div>
      <button onClick={click}>ぼたん</button>
    </div>
  );
};
