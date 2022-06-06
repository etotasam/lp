import React from "react";
// import { motion, useAnimation, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//! hooks
import { useQueryState } from "@/hooks/useQueryState";

gsap.registerPlugin(ScrollTrigger);

export const Header = () => {
  const manuList = ["About", "Concept", "Tours", "News"];

  const headerRef = React.useRef<HTMLElement>(null);
  const headerHeadline = React.useRef<HTMLHeadingElement>(null);
  React.useEffect(() => {
    gsap.fromTo(
      headerHeadline.current,
      {
        top: 100,
        left: 100,
        fontSize: "150px",
      },
      {
        top: 0,
        left: 10,
        fontSize: "50px",
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".header",
          start: "+=100px top",
          end: "bottom center",
          scrub: 0.5,
          // markers: true,
        },
      }
    );
  }, []);

  const headerNavList = React.useRef<any>([]);
  manuList.forEach((_, i) => {
    headerNavList.current[i] = React.createRef<any>();
  });
  React.useEffect(() => {
    headerNavList.current.forEach((el: any, i: number) => {
      // console.log(el);
      gsap.fromTo(
        el.current,
        {
          top: 50 + i * 30,
          right: 50,
        },
        {
          top: 10,
          right: 340 - i * 85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: `+=${i * 50}px top`,
            end: "bottom center",
            scrub: 0.5,
            // markers: true,
          },
        }
      );
    });
  }, []);

  //? 透明のbar
  const navWrapper = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    gsap.fromTo(
      navWrapper.current,
      {
        backgroundColor: "transparent",
      },
      {
        backgroundColor: "#ffffffe1",
        duration: 1,
        scrollTrigger: {
          trigger: headerRef.current,
          start: `bottom-=50px top`,
          end: "bottom-=50px top",
          scrub: 1,
          // markers: true,
        },
      }
    );
  }, []);

  const [toursRef] = useQueryState<HTMLElement>("ref/tours");
  const [aboutRef] = useQueryState<HTMLElement>("ref/about");
  const [menuLists, setMenuLists] = React.useState<{ ref: HTMLElement; index: number; title: string }[]>();
  React.useEffect(() => {
    if (!toursRef || !aboutRef) return;
    const toursIndex: number = manuList.findIndex((list) => list === "Tours");
    const aboutIndex: number = manuList.findIndex((list) => list === "About");

    const lists = [
      { ref: toursRef, index: toursIndex, title: "Tours" },
      { ref: aboutRef, index: aboutIndex, title: "About" },
    ];
    setMenuLists(lists);

    lists.forEach((list) => {
      ScrollTrigger.create({
        trigger: list.ref,
        start: "top center",
        end: "bottom center",
        toggleClass: { targets: headerNavList.current[list.index].current, className: "header-nav-list_active" },
        // markers: true,
      });
    });
  }, [toursRef, aboutRef]);

  const scrollToEl = (index: number) => {
    const el = menuLists?.find((obj) => obj.index === index)?.ref;
    if (!el) return;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.pageYOffset - 50,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header ref={headerRef} className="header">
        <div ref={navWrapper} className="nav-wrapper" />
        <h1
          ref={headerHeadline}
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
          className="header-headline"
        >
          TITLE
        </h1>
        <nav className="header-nav">
          <ul className="header-nav-list-wrapper">
            {manuList.map((title, index) => (
              <li
                className="header-nav-list"
                onClick={() => scrollToEl(index)}
                ref={headerNavList.current[index]}
                key={title}
              >
                {title}
              </li>
            ))}
          </ul>
        </nav>
        <span className="header-message" data-text="Test Message. Egypt. Trukey. Jordan">
          Test Message. Egypt. Trukey. Jordan
        </span>
      </header>
    </>
  );
};
