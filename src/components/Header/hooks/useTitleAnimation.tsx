import React from "react";
import { useQueryState } from "@/hooks/useQueryState";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  titelWrapperRef: React.RefObject<HTMLHeadingElement>;
  titleRef: React.RefObject<HTMLDivElement>;
  navWrapperRef: React.RefObject<HTMLDivElement>;
};

export const useTitleAnimation = ({ titelWrapperRef, titleRef, navWrapperRef }: Props) => {
  const [topContainerEl] = useQueryState<HTMLDivElement>(`ref/topContainer`);

  //? animation of Title
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
  }, [topContainerEl]);

  //? switch header bgColor (transparent or white)
  React.useEffect(() => {
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
};
