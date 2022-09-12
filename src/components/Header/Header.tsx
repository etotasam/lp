import React, { useEffect, useLayoutEffect } from "react";
//! css
import styles from "./header.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//! hooks
import { useQueryState } from "@/hooks/useQueryState";
//! component
import { Nav } from "./Nav";

gsap.registerPlugin(ScrollTrigger);

export const Header = () => {
  const title = "トルコの旅";

  const [topContainerEl] = useQueryState<HTMLDivElement>(`ref/topContainer`);
  const headerRef = React.useRef<HTMLElement>(null);

  //? animation of Title
  const titelWrapperRef = React.useRef<HTMLHeadingElement>(null);
  React.useEffect(() => {
    if (!topContainerEl) return;
    gsap.fromTo(
      titelWrapperRef.current,
      {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        fontSize: "100px",
      },
      {
        top: 0,
        left: "5%",
        transform: `translate(0px, 0px)`,
        fontSize: "50px",
        ease: "power2.out",
        scrollTrigger: {
          trigger: topContainerEl,
          start: "+=100px top",
          end: "bottom center",
          scrub: 1,
          // markers: true,
        },
      }
    );
  }, [topContainerEl]);

  //? fadein Title animation
  const titleRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      }
    );
  }, [topContainerEl]);

  //? switch header bgColor (transparent or white)
  const navWrapperRef = React.useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (!topContainerEl || !navWrapperRef) return;
    gsap.fromTo(
      navWrapperRef.current,
      {
        backgroundColor: "transparent",
      },
      {
        backgroundColor: "#ffffffd5",
        scrollTrigger: {
          trigger: topContainerEl,
          start: `bottom-=100 top`,
          end: `bottom-=100 top`,
          scrub: 1,
          // markers: true,
        },
      }
    );
  }, [topContainerEl, navWrapperRef]);

  return (
    <>
      <header ref={headerRef} className={`${styles["header"]}`}>
        <div ref={navWrapperRef} className={`${styles["header-bar"]}`} />
        {topContainerEl && (
          <div>
            <div
              ref={titelWrapperRef}
              className={`${styles["title"]}`}
              onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
            >
              <h1 ref={titleRef}>{title}</h1>
            </div>
            <Nav />
          </div>
        )}
      </header>
    </>
  );
};
