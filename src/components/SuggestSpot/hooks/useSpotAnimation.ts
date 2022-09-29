import React, { useEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//! hooks
import { useCheckDevice } from "@/hooks/useCheckDevice"

gsap.registerPlugin(ScrollTrigger);

type Props = {
  headlineRef: React.RefObject<HTMLHeadingElement>
  contRightRef: React.RefObject<HTMLDivElement>
  paragOuterRef: React.RefObject<HTMLDivElement>
  imgFirstRef: React.RefObject<HTMLElement>
  imgSecondRef: React.RefObject<HTMLElement>
  imgThirdRef: React.RefObject<HTMLElement>
}

export const useSpotAnimation = ({ headlineRef, imgFirstRef, imgSecondRef, imgThirdRef, contRightRef, paragOuterRef }: Props) => {
  const { isMobile } = useCheckDevice()
  const q = gsap.utils.selector(headlineRef);
  const parag = gsap.utils.selector(paragOuterRef)
  const contRightEl = gsap.utils.selector(contRightRef);
  useEffect(() => {
    gsap.killTweensOf(q(`span`))
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
        start: "top 70%",
        // markers: true,
      },
    });
    //? image animation
    gsap.killTweensOf(imgFirstRef.current)
    gsap.set(imgFirstRef.current, { x: 30, opacity: 0 })
    gsap.to(imgFirstRef.current, {
      x: 0,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: imgFirstRef.current,
        start: "top 70%",
        // markers: true,
      },
    });

    gsap.killTweensOf(imgSecondRef.current)
    gsap.set(imgSecondRef.current, { x: -30, opacity: 0 })
    gsap.to(imgSecondRef.current, {
      x: 0,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: imgSecondRef.current,
        start: "top 70%",
        // markers: true,
      },
    });

    gsap.killTweensOf(imgThirdRef.current)
    gsap.killTweensOf(paragOuterRef.current)
    gsap.killTweensOf(parag("p"))
    gsap.set(imgThirdRef.current, { x: 30, opacity: 0 })
    gsap.set(paragOuterRef.current, { opacity: 0 })
    gsap.set(parag("p"), { opacity: 0 })

    gsap.to(imgThirdRef.current, {
      x: 0,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: imgThirdRef.current,
        start: "top 70%",
        // markers: true,
      },
    });
    gsap.to(paragOuterRef.current, {
      opacity: 1,
      delay: 1,
      duration: 1,
      scrollTrigger: {
        trigger: imgThirdRef.current,
        start: "top 70%",
        // markers: true,
      },
    })
    gsap.to(parag("p"), {
      opacity: 1,
      delay: 2,
      scrollTrigger: {
        trigger: imgThirdRef.current,
        start: "top 70%",
        // markers: true,
      },
    })



    gsap.killTweensOf(contRightEl("h2"))
    gsap.set(contRightEl("h2"), {
      x: -30,
      opacity: 0
    })
    gsap.to(contRightEl("h2"), {
      x: 0,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: headlineRef.current,
        start: "top 70%",
      }
    })

    gsap.killTweensOf(contRightEl("p"))
    gsap.set(contRightEl("p"), {
      x: 30,
      opacity: 0
    })
    gsap.to(contRightEl("p"), {
      x: 0,
      opacity: 1,
      duration: 1.5,
      delay: 1,
      scrollTrigger: {
        trigger: headlineRef.current,
        start: "top 70%",
      }
    })
  }, [isMobile]);
}
