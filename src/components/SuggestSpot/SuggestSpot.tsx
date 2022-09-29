import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./suggestSpot.module.scss";
//! hooks
import { useSpotAnimation } from "./hooks/useSpotAnimation";

//! img
import img1 from "../../images/turkey.jpg";
import img2 from "../../images/turkey_3.jpg";
import img3 from "../../images/turkey_2.jpg";

const img = (width = 200, height = 300) => {
  return `https://picsum.photos/${width}/${height}`;
};

// gsap.registerPlugin(ScrollTrigger);

export const SuggestSpot = () => {
  const titleString = "トルコのおすすめスポット♪";
  const titleCharArray = titleString.split("");

  const headlineRef = React.useRef<HTMLHeadingElement>(null);
  // const q = gsap.utils.selector(headlineRef);
  // const imgWrapRef = React.useRef<HTMLDivElement>(null);
  const imgFirstRef = React.useRef<HTMLElement>(null);
  const imgSecondRef = React.useRef<HTMLElement>(null);
  const imgThirdRef = React.useRef<HTMLElement>(null);
  const paragOuterRef = React.useRef<HTMLDivElement>(null);
  const contRightRef = React.useRef<HTMLDivElement>(null);
  useSpotAnimation({ headlineRef, imgFirstRef, imgSecondRef, imgThirdRef, contRightRef, paragOuterRef });

  return (
    <div className={`${styles["container"]}`}>
      <div>
        <h1 ref={headlineRef} className={`${styles["headline"]}`}>
          {titleCharArray.map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </h1>
      </div>
      {/* //? mine content */}
      <div className={`${styles["content"]}`}>
        <div className={`${styles["content__left"]}`}>
          <div className={styles["img-outer"]}>
            <figure ref={imgFirstRef} className={`${styles["first"]} ${styles["img"]}`}>
              <img src={img1} alt="写真1" />
            </figure>
          </div>

          <div className={styles["img-outer"]}>
            <figure ref={imgSecondRef} className={`${styles["second"]} ${styles["img"]}`}>
              <img src={img2} alt="写真1" />
            </figure>
          </div>

          <div className={styles["img-outer"]}>
            <h2>てすとたいとる</h2>
            <div ref={paragOuterRef} className={styles["parag-outer"]}>
              <p>
                以前家族でくじゅう連山に登ったことがあり、大分県は自然豊かなイメージでした。佐伯市を訪れるのは今回が初めてだったので、どんな所なんだろうとすごくワクワクしていたんです。佐伯市は魅力が盛りだくさんで、海も山も景色がとても素敵。歴史ある城下町もあるので、もっとゆっくりといろんな所を回ってみたい、また来たいなと感じるまちでした。
              </p>
            </div>
            <figure ref={imgThirdRef} className={`${styles["third"]} ${styles["img"]}`}>
              <img src={img3} alt="写真1" />
            </figure>
          </div>
        </div>
        {/* <div ref={contRightRef} className={`${styles["content__right"]}`}>
          <h2>コンテンツ タイトル</h2>
          <p>
            コンテンツ文章コンテンツ文章コンテンツ文章コンテンツ文章コンテンツ文章コンテンツ文章コンテンツ文章コンテンツ文章コンテンツ文章コンテンツ文章コンテンツ文章コンテンツ文章コンテンツ文章コンテンツ文章コンテンツ文章コンテンツ文章コンテンツ文章コンテンツ文章
          </p>
        </div> */}
      </div>
    </div>
  );
};
