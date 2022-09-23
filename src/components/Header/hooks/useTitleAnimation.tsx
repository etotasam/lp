import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//! hooks
import { useCheckDevice } from "@/hooks/useCheckDevice";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  titelWrapperRef: React.RefObject<HTMLHeadingElement>;
  titleRef: React.RefObject<HTMLDivElement>;
  navWrapperRef: React.RefObject<HTMLDivElement>;
  containerRef: React.RefObject<HTMLDivElement>;
};

export const useTitleAnimation = ({ titelWrapperRef, titleRef, navWrapperRef, containerRef }: Props) => {
  const { isMobile } = useCheckDevice();
  //? animation of Title
  React.useEffect(() => {
    if (isMobile === undefined) return;
    gsap.killTweensOf(titelWrapperRef.current);
    if (!isMobile) {
      gsap.fromTo(
        titelWrapperRef.current,
        {
          top: `50%`,
          left: `50%`,
          transform: `translate(-50%, -50%)`,
          fontSize: "8vw",
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "+=100px top",
            end: "bottom center",
            scrub: 1,
            // markers: true,
          },
        },
        {
          top: 0,
          left: "5%",
          transform: `translate(0%, 0%)`,
          fontSize: "50px",
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "+=100px top",
            end: "bottom center",
            scrub: 1,
            // markers: true,
          },
        }
      );
    }
    if (isMobile) {
      gsap.fromTo(
        titelWrapperRef.current,
        {
          top: `50%`,
          left: `50%`,
          transform: `translate(-50%, -50%)`,
          fontSize: "8vw",
          opacity: 1,
        },
        {
          top: `52%`,
          left: `50%`,
          transform: `translate(-50%, -50%)`,
          fontSize: "8vw",
          opacity: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "+=100px top",
            end: "bottom-=30% center",
            scrub: 1,
            // markers: true,
          },
        }
      );
    }
  }, [isMobile]);

  //? fadein Title animation
  React.useEffect(() => {
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
  }, []);

  //? switch header bgColor (transparent or white)
  React.useEffect(() => {
    if (!navWrapperRef.current) return;
    gsap.fromTo(
      navWrapperRef.current,
      {
        backgroundColor: "transparent",
      },
      {
        backgroundColor: "#ffffffd5",
        scrollTrigger: {
          trigger: containerRef.current,
          start: `bottom-=100 top`,
          end: `bottom-=100 top`,
          scrub: 1,
          // markers: true,
        },
      }
    );
  }, [navWrapperRef.current, isMobile]);
};
