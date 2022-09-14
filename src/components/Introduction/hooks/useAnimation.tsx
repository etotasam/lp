import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  imgParallaxRef: React.RefObject<HTMLImageElement>;
  aboutContainer: React.RefObject<HTMLElement>;
  rightImage: React.RefObject<HTMLElement>;
  descriptionRef: React.RefObject<HTMLDivElement>;
};

export const useAnimation = ({ imgParallaxRef, aboutContainer, rightImage, descriptionRef }: Props) => {
  //? image animation
  useEffect(() => {
    if (!imgParallaxRef || !aboutContainer || !rightImage) return;
    //? image parallax animation
    gsap.fromTo(
      imgParallaxRef.current,
      {
        y: 0,
      },
      {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: aboutContainer.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
    // //? fadein animation of image
    gsap.from(rightImage.current, {
      opacity: 0,
      duration: 1.5,
      delay: 1.5,
      scrollTrigger: { trigger: descriptionRef.current },
    });
  }, [imgParallaxRef, aboutContainer, rightImage]);

  //? left content animation
  useEffect(() => {
    gsap.from(descriptionRef.current, {
      x: -50,
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
      scrollTrigger: { trigger: descriptionRef.current },
    });
  }, [descriptionRef]);
};
