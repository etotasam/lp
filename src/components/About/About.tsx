import React from "react";
//! css
import styles from "./about.module.scss";
// import simpleParallax from "simple-parallax-js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//! components
import { Button } from "@/components/atom/Button";
//! images
import img from "../../images/about_image2.jpg";
import img3 from "../../images/about_image3.jpg";
//! hooks
import { useQueryState } from "@/hooks/useQueryState";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const title = "とるこの魅力";
  // const imgWrapper = React.useRef<HTMLDivElement>(null);
  const imgParallax = React.useRef<HTMLImageElement>(null);
  React.useEffect(() => {
    gsap.fromTo(
      imgParallax.current,
      {
        y: 0,
      },
      {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-image-wrapper",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
  }, []);

  const [aboutCompnentEl, setAboutComponentEl] = useQueryState<HTMLElement>("ref/about");
  const aboutWrapper = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (!aboutWrapper.current) return;
    setAboutComponentEl(aboutWrapper.current);
  }, [aboutWrapper]);

  return (
    <section ref={aboutWrapper} className={styles["wrapper"]}>
      {/* left */}
      <div className={styles["left"]}>
        <div className={styles["description-wrapper"]}>
          <h1>{title}</h1>
          <div className={styles["description"]}>
            <p>
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れて
            </p>
            {/* <p>
              Lorem ipsum dolor sit amet. Eum sapiente laborum et dolorem earum rem repellat distinctio! Cum architecto
              veritatis hic perspiciatis consequatur ut voluptatum quam.{" "}
            </p>
            <p>
              Qui quaerat rerum qui soluta vero est tempora rerum hic internos voluptates sit rerum perferendis et
              galisum enim est totam dignissimos. Non accusamus enim ea fuga pariatur in eaque laudantium ex autem velit
              est quae dolor. Non facilis voluptatum et consequatur adipisci vel internos galisum non accusantium
              aperiam vel animi eaque quo iusto numquam et odio error.{" "}
            </p> */}
          </div>
          <Button>もっと詳しく♪</Button>
        </div>
      </div>
      {/* right */}
      <figure className={styles["right"]}>
        <div className={styles["image-wrapper"]}>
          <img ref={imgParallax} src={img} alt="about_image" />
        </div>
        {/* <div className="about-absolute-image-wrapper">
          <img src={img3} alt="" />
        </div> */}
      </figure>
    </section>
  );
};
