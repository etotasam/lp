import React from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./suggestSpot.module.scss";
import img2 from "../../images/Introduction_image2.jpg";
//! hooks
import { useSpotAnimation } from "./hooks/useSpotAnimation";

//! img
const img = (width = 200, height = 300) => {
  return `https://picsum.photos/${width}/${height}`;
};

// gsap.registerPlugin(ScrollTrigger);

export const SuggestSpot = () => {
  const titleString = "トルコのおすすめスポット♪";
  const titleCharArray = titleString.split("");

  const headlineRef = React.useRef<HTMLHeadingElement>(null);
  // const q = gsap.utils.selector(headlineRef);
  const imgWrapRef = React.useRef<HTMLDivElement>(null);
  useSpotAnimation({ headlineRef, imgWrapRef });

  return (
    <div className={`${styles["container"]}`}>
      <div>
        <h1 ref={headlineRef} className={`${styles["headline"]}`}>
          {titleCharArray.map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </h1>
      </div>
      <div ref={imgWrapRef} className={`${styles["img"]}`}>
        <img src={img2} alt="写真1" />
      </div>
    </div>
  );
};
