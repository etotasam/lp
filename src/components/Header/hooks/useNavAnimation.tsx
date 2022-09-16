import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "../header.module.scss";

//! hooks
import { useScroll } from "@/hooks/useScroll";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  ulRef: React.RefObject<HTMLUListElement>;
  listRef: React.MutableRefObject<any>;
  listInnerDivRef: React.MutableRefObject<any>;
  containerRef: React.RefObject<HTMLDivElement>;
  isPC: boolean | undefined;
  hamburgerRef: React.RefObject<HTMLDivElement>;
  hamButtonRef: React.RefObject<HTMLButtonElement>;
  isOpenModal: boolean;
};

export const useNavAnimation = ({
  ulRef,
  listRef,
  listInnerDivRef,
  containerRef,
  isPC,
  hamburgerRef,
  hamButtonRef,
  isOpenModal,
}: Props) => {
  const rightMargin = 20;
  const topMargin = 100;
  const topSpace = 45;
  const extraRightMargin = 20;
  //? set List Margin in css
  React.useEffect(() => {
    const root = window.document.querySelector(`:root`) as HTMLElement;
    root.style.setProperty(`--list-marginRight`, `${rightMargin}px`);
  }, []);

  //? animation of Nav List(scroll)
  React.useEffect(() => {
    if (!isPC) return;
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
  }, [containerRef, isPC]);

  //? switch List bgColor by scroll (transparent or white)
  React.useEffect(() => {
    if (!isPC) return;
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
  }, [containerRef, isPC]);

  const { isScroll } = useScroll();
  //? add class to hamburger when scroll
  React.useEffect(() => {
    if (isOpenModal) return;
    if (isScroll) {
      hamburgerRef.current?.classList.remove(styles["active"]);
      // hamburgerRef.current?.classList.add(styles["inactive"]);
      hamButtonRef.current?.classList.remove(styles["active"]);
      // hamButtonRef.current?.classList.add(styles["inactive"]);
    } else {
      // hamburgerRef.current?.classList.remove(styles["inactive"]);
      hamburgerRef.current?.classList.add(styles["active"]);
      // hamButtonRef.current?.classList.remove(styles["inactive"]);
      hamButtonRef.current?.classList.add(styles["active"]);
    }
  }, [isScroll, isPC]);

  React.useEffect(() => {
    if (isOpenModal) {
      // hamburgerRef.current?.classList.remove(styles["default-hamburger-position"]);
      // hamburgerRef.current?.classList.remove(styles["active"]);
      hamburgerRef.current?.classList.add(styles["modal-open"]);
    } else {
      hamburgerRef.current?.classList.remove(styles["modal-open"]);
      // hamburgerRef.current?.classList.add(styles["default-hamburger-position"]);
      // hamburgerRef.current?.classList.add(styles["active"]);
    }
  }, [isOpenModal]);
};
