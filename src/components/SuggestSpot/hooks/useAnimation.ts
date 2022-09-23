import React, { useEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  headlineRef: React.RefObject<HTMLHeadingElement>
  imgWrapRef: React.RefObject<HTMLDivElement>
}

export const useAnimation = ({ headlineRef, imgWrapRef }: Props) => {
  const q = gsap.utils.selector(headlineRef);
  useEffect(() => {
    gsap.from(q(`span`), {
      // x: -3,
      y: 5,
      scale: 1.25,
      filter: "blur(6px)",
      stagger: 0.1,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: headlineRef.current,
        start: "top bottom",
        end: "top bottom",
        // markers: true,
      },
    });

    gsap.from(imgWrapRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: imgWrapRef.current,
        start: "top bottom",
        end: "top bottom",
        // markers: true,
      },
    });
  }, []);
}
