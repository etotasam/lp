import React, { useRef } from "react";
import styles from "./tours.module.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//! component
import { Button } from "@/components/atom/Button";

//! images
import egypt from "../../images/card/egypt.jpg";
import jordan from "../../images/card/jordan.jpg";
import turkey from "../../images/card/turkey.jpg";
//! hooks
import { useQueryState } from "@/hooks/useQueryState";

gsap.registerPlugin(ScrollTrigger);

export const Tours = () => {
  const contentWrapperRef = useRef<HTMLUListElement>(null);
  const discriptionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (!contentWrapperRef.current || !discriptionRef.current || !wrapperRef.current) return;
    console.log(contentWrapperRef.current);
    // gsap.fromTo(
    //   ".headline",
    //   {
    //     autoAlpha: 0,
    //     x: 200,
    //   },
    //   {
    //     autoAlpha: 1,
    //     x: 0,
    //     duration: 1,
    //     delay: 1,
    //     scrollTrigger: {
    //       trigger: ".wrapper",
    //       start: "top+=100px bottom",
    //       end: "top+=100px bottom",
    //       // markers: true,
    //     },
    //   }
    // );
    gsap.fromTo(
      // [".content-wrappter"],
      contentWrapperRef.current,
      {
        autoAlpha: 0,
        y: 500,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        // delay: 0.5,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top+=100px bottom",
          end: "top+=100px bottom",
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      discriptionRef.current,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1,
        // delay: 0.5,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top+=100px bottom",
          end: "top+=100px bottom",
          markers: true,
        },
      }
    );
    //? descriptionのパララックス
    gsap.fromTo(
      discriptionRef.current,
      {
        y: 0,
      },
      {
        y: -30,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  }, [contentWrapperRef, discriptionRef, wrapperRef]);

  const cards = [
    {
      img: egypt,
      title: "Egypt",
      text: "egypt tours description Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt",
    },
    {
      img: jordan,
      title: "Jordan",
      text: "jordan tours description Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    },
    {
      img: turkey,
      title: "Turkey",
      text: "turkey tours description Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim",
    },
  ];

  const [toursRef, setTourswrapper] = useQueryState<HTMLElement>("ref/tours");
  React.useEffect(() => {
    if (!wrapperRef.current) return;
    setTourswrapper(wrapperRef.current);
  }, [wrapperRef]);

  const [isHover, setIsHover] = React.useState({ Egypt: false, Jordan: false, Turkey: false });

  const click = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    console.log("click");
  };

  return (
    <>
      <section ref={wrapperRef} className={styles["wrapper"]}>
        <h1 className={styles["headline"]}>Tours</h1>

        <div className={styles["image-container"]}>
          <div ref={discriptionRef} className={styles["description"]}>
            <p>
              この文章はダミーです。
              文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ
            </p>
            <Button>Read More</Button>
          </div>
          <ul ref={contentWrapperRef} className={styles[`content-wrappter`]}>
            {cards.map(({ img, text, title }) => (
              <li className={styles["content"]} key={title}>
                <figure
                  data-title={title}
                  className={styles[`content_item`]}
                  onMouseEnter={() =>
                    setIsHover((v) => {
                      return { ...v, [title]: true };
                    })
                  }
                  onMouseLeave={() =>
                    setIsHover((v) => {
                      return { ...v, [title]: false };
                    })
                  }
                >
                  <a
                    href="/"
                    onClick={click}
                    className={`${styles["content_item_l"]} ${
                      // @ts-ignore
                      isHover[title] ? styles[`content_item_l_active`] : styles[`content_item_l_inactive`]
                    }`}
                  >
                    <span>{title}</span>
                  </a>
                  <img
                    className={`${styles["content_item_img"]} ${
                      // @ts-ignore
                      isHover[title] ? styles[`content_item_img_active`] : styles[`content_item_img_inactive`]
                    }`}
                    src={img}
                    alt={title}
                    width="100%"
                    height="100%"
                  />
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
