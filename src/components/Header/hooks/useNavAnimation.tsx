import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type Props = {
  ulRef: React.RefObject<HTMLUListElement>;
  listRef: React.MutableRefObject<any>;
  listInnerDivRef: React.MutableRefObject<any>;
  containerRef: React.RefObject<HTMLDivElement>;
};

export const useNavAnimation = ({ ulRef, listRef, listInnerDivRef, containerRef }: Props) => {
  const rightMargin = 20;
  const topMargin = 100;
  const topSpace = 45;
  const extraRightMargin = 20;
  //? set List Margin in css
  React.useEffect(() => {
    const el = window.document.querySelector(`:root`) as HTMLElement;
    el.style.setProperty(`--list-marginRight`, `${rightMargin}px`);
  }, []);

  //? animation of Nav List(scroll)
  React.useEffect(() => {
    if (!containerRef || !ulRef || !listRef) return;
    const ulWidth = ulRef.current!.clientWidth;
    listInnerDivRef.current.forEach((el: any, i: number) => {
      const elArr = [...Array(i + 1)].map((v, i) => i);
      const totalListWidth = elArr.reduce((prev, curr) => {
        return prev + listInnerDivRef.current[curr].current.clientWidth;
      }, 0);
      gsap.fromTo(
        el.current,
        {
          transform: `translate(${ulWidth - totalListWidth - rightMargin * i - extraRightMargin}px, ${
            topSpace * i + topMargin
          }px)`,
        },
        {
          transform: `translate(0px, 0px)`,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: `+=${(i + 1) * 50}px top`,
            end: `center+=${(i + 1) * 50}px top`,
            scrub: 0.5,
            // markers: true,
          },
        }
      );
    });

    //? fadein animation of List
    listRef.current.forEach((span: any, i: number) => {
      gsap.fromTo(
        span.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          delay: 0.5 * (i + 1),
        }
      );
    });
  }, [containerRef]);

  //? switch bgColor by scroll (transparent or white)
  React.useEffect(() => {
    if (!containerRef) return;
    listInnerDivRef.current.forEach((el: any, i: number) => {
      gsap.fromTo(
        el.current,
        {
          backgroundColor: "white",
          duration: 1,
        },
        {
          backgroundColor: "transparent",
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: `bottom-=50px top`,
            end: "bottom-=50px top",
            scrub: true,
          },
        }
      );
    });
  }, [containerRef]);
};
