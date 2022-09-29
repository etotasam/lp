import React, { useEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  headlineRef: React.RefObject<HTMLHeadingElement>
  imgWrapRef: React.RefObject<HTMLDivElement>
  contRightRef: React.RefObject<HTMLDivElement>
}

export const useSpotAnimation = ({ headlineRef, imgWrapRef, contRightRef }: Props) => {
  const q = gsap.utils.selector(headlineRef);
  const contRightEl = gsap.utils.selector(contRightRef);
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

    gsap.set(contRightEl("h2"), {
      x: -30,
      // opacity: 0
    })
    gsap.set(contRightEl("p"), {
      x: 30,
      // opacity: 0
    })

    gsap.to(contRightEl("h2"), {
      x: 0,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: imgWrapRef.current,
        start: "top bottom",
      }
    })
    gsap.to(contRightEl("p"), {
      x: 0,
      opacity: 1,
      duration: 1.5,
      delay: 0.5,
      scrollTrigger: {
        trigger: imgWrapRef.current,
        start: "top bottom",
      }
    })
  }, []);
}
