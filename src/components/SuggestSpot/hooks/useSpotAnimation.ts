import React, { useEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  headlineRef: React.RefObject<HTMLHeadingElement>
  imgWrapRef: React.RefObject<HTMLDivElement>
}

export const useSpotAnimation = ({ headlineRef, imgWrapRef }: Props) => {
  const q = gsap.utils.selector(headlineRef);
  useEffect(() => {
    gsap.set(q(`span`), {
      y: 5,
      scale: 1.25,
      filter: "blur(6px)",
      opacity: 0,
    })
    gsap.to(q(`span`), {
      // x: -3,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      stagger: 0.1,
      opacity: 1,
      duration: 0.5,
      scrollTrigger: {
        trigger: headlineRef.current,
        start: "top 90%",
        // markers: true,
      },
    });

    gsap.set(imgWrapRef.current, { y: 50, opacity: 0 })
    gsap.to(imgWrapRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: imgWrapRef.current,
        start: "top bottom",
        // markers: true,
      },
    });
  }, []);
}
