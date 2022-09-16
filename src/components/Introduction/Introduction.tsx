import React from "react";
//! css
import styles from "./Introduction.module.scss";
//! components
import { Button } from "@/components/atom/Button";
//! images
import img from "../../images/Introduction_image2.jpg";
import img3 from "../../images/Introduction_image3.jpg";
//! hooks
import { useAnimation } from "./hooks/useAnimation";
import { useCheckDevice } from "@/hooks/useCheckDevice";

export const Introduction = React.memo(() => {
  const title = "トルコのみりょく";
  const imgParallaxRef = React.useRef<HTMLImageElement>(null);
  const rightImage = React.useRef<HTMLElement>(null);
  const aboutContainer = React.useRef<HTMLElement>(null);
  const descriptionRef = React.useRef<HTMLDivElement>(null);
  useAnimation({ aboutContainer, rightImage, imgParallaxRef, descriptionRef });

  const { isMobile } = useCheckDevice();

  return (
    <section ref={aboutContainer} className={styles["wrapper"]}>
      {/* //? left */}
      <div className={styles["left-content"]}>
        <div className={styles["description-wrapper"]}>
          <h1>{title}</h1>
          <div ref={descriptionRef} className={styles["description"]}>
            <p>
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れて
            </p>
          </div>
          <Button>もっと詳しく♪</Button>
        </div>
      </div>
      {/* //? right */}
      <figure ref={rightImage} className={styles["right-content"]}>
        {/* <div className={styles["image-wrapper"]}>
          <img ref={imgParallaxRef} src={img} alt="about_image" />
        </div> */}
        <div className={`${styles["test-div"]}`}>
          <div ref={imgParallaxRef} className={styles["image-wrapper"]}>
            {/* <img ref={imgParallaxRef} src={img3} alt="about_image" /> */}
          </div>
        </div>
      </figure>
    </section>
  );
});
