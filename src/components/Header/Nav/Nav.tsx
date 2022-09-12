import React, { useEffect } from "react";
import styles from "./nav.module.scss";
import { useQueryState } from "@/hooks/useQueryState";
import gsap from "gsap";

export const Nav = React.memo(() => {
  const navList = ["トルコの魅力", "News", "Tours", "Concept"];
  const ulRef = React.useRef<HTMLUListElement>(null);
  const listRef = React.useRef<any>([]);
  const listInnerDivRef = React.useRef<any>([]);
  const [topContainerEl] = useQueryState<HTMLDivElement>(`ref/topContainer`);

  //? create multiple Ref
  navList.forEach((_, i) => {
    listInnerDivRef.current[i] = React.createRef<any>();
  });
  navList.forEach((_, i) => {
    listRef.current[i] = React.createRef<any>();
  });

  //? animation of Nav List(scroll)
  const rightMargin = 20;
  const topMargin = 100;
  const topSpace = 45;
  const extraRightMargin = 20;
  useEffect(() => {
    const el = window.document.querySelector(`:root`) as HTMLElement;
    el.style.setProperty(`--list-marginRight`, `${rightMargin}px`);
  }, []);
  React.useEffect(() => {
    if (!topContainerEl || !ulRef.current || !listRef.current) return;
    const ulWidth = ulRef.current.clientWidth;
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
            trigger: topContainerEl,
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
  }, []);

  // //? switch bgColor by scroll (transparent or white)
  React.useEffect(() => {
    if (!topContainerEl) return;
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
            trigger: topContainerEl,
            start: `bottom-=50px top`,
            end: "bottom-=50px top",
            scrub: true,
          },
        }
      );
    });
  }, [topContainerEl]);

  return (
    <nav className={`${styles["nav"]}`}>
      <ul ref={ulRef} className={`${styles["nav-ul"]}`}>
        {navList.map((text, index) => (
          <li key={text} ref={listRef.current[index]}>
            <div key={text} className={`${styles["nav-list"]}`} ref={listInnerDivRef.current[index]}>
              <span className={`${styles["nav-list-span"]}`}>{text}</span>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
});
