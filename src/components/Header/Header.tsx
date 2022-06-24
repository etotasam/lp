import React from "react";
// import { motion, useAnimation, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//! hooks
import { useQueryState } from "@/hooks/useQueryState";

gsap.registerPlugin(ScrollTrigger);

export const Header = () => {
  const title = "トルコの旅";

  //? navigation listの作成
  React.useEffect(() => {});
  const manuList = ["トルコの魅力", "Concept", "Tours", "News"];

  const [topContainerRef] = useQueryState<HTMLDivElement>(`ref/topContainer`);
  const headerRef = React.useRef<HTMLElement>(null);

  //? タイトルのアニメーション
  const headerHeadline = React.useRef<HTMLHeadingElement>(null);
  React.useEffect(() => {
    if (!topContainerRef) return;
    gsap.fromTo(
      headerHeadline.current,
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
          trigger: topContainerRef,
          start: "+=100px top",
          end: "bottom center",
          scrub: 0.5,
          // markers: true,
        },
      }
    );
  }, [topContainerRef]);

  //? navigationのアニメーション(scroll)
  const headerNavList = React.useRef<any>([]);
  const headerNavListSpan = React.useRef<any>([]);
  manuList.forEach((_, i) => {
    headerNavList.current[i] = React.createRef<any>();
  });
  manuList.forEach((_, i) => {
    headerNavListSpan.current[i] = React.createRef<any>();
  });
  const ulRef = React.useRef<HTMLUListElement>(null);
  React.useEffect(() => {
    if (!topContainerRef || !ulRef.current) return;
    const ulRefWidth = ulRef.current.clientWidth;
    headerNavList.current.forEach((el: any, i: number) => {
      const elArr = [...Array(i + 1)].map((v, i) => i);
      const totalListWidth = elArr.reduce((prev, curr) => {
        return prev + headerNavList.current[curr].current.clientWidth;
      }, 0);
      gsap.fromTo(
        el.current,
        {
          transform: `translate(${ulRefWidth - totalListWidth}px, ${35 * i + 100}px)`,
        },
        {
          transform: `translate(0px, 0px)`,
          ease: "power2.out",
          scrollTrigger: {
            trigger: topContainerRef,
            start: `+=${i * 50}px top`,
            end: "bottom center",
            scrub: 0.5,
            // markers: true,
          },
        }
      );
    });
  }, [topContainerRef, ulRef]);

  //? navigationのアニメーション(opacity)
  React.useEffect(() => {
    if (!topContainerRef || !headerHeadline.current || !ulRef.current) return;
    gsap.fromTo(
      [headerHeadline.current, ulRef.current],
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1,
      }
    );
  }, [topContainerRef, headerHeadline, ulRef]);

  //? 透明のbar
  const navWrapper = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (!topContainerRef) return;
    gsap.fromTo(
      navWrapper.current,
      {
        backgroundColor: "transparent",
        boxShadow: `0px 0px 0px 0px rgba(0, 0, 0, 0)`,
      },
      {
        backgroundColor: "#ffffffe1",
        boxShadow: `0px 3px 5px 0px rgba(0, 0, 0, 0.1)`,
        duration: 1,
        scrollTrigger: {
          trigger: topContainerRef,
          start: `bottom-=50px top`,
          end: "bottom-=50px top",
          scrub: 1,
          // markers: true,
        },
      }
    );
  }, [topContainerRef]);

  //? headerのテキストの色を変更
  // React.useEffect(() => {
  //   if (!topContainerRef || !headerRef.current) return;
  //   gsap.fromTo(
  //     headerRef.current,
  //     {
  //       color: `#19d07a`,
  //     },
  //     {
  //       color: `#535353`,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: topContainerRef,
  //         start: `bottom-=50px top`,
  //         end: "bottom-=50px top",
  //         scrub: 1,
  //         // markers: true,
  //       },
  //     }
  //   );
  // }, [topContainerRef, headerRef]);

  const [toursRef] = useQueryState<HTMLElement>("ref/tours");
  const [aboutRef] = useQueryState<HTMLElement>("ref/about");
  const [menuLists, setMenuLists] = React.useState<{ ref: HTMLElement; index: number; text: string }[]>();
  React.useEffect(() => {
    // const toursIndex: number = manuList.findIndex((list) => list === "Tours");
    const aboutIndex: number = manuList.findIndex((list) => list === "トルコの魅力");

    const lists = [
      // { ref: toursRef, index: toursIndex, text: "Tours" },
      { ref: aboutRef, index: aboutIndex, text: "トルコの魅力" },
    ];

    setMenuLists(lists);

    lists.forEach((list) => {
      ScrollTrigger.create({
        trigger: list.ref,
        start: "top center",
        end: "bottom center",
        toggleClass: {
          targets: headerNavListSpan.current[list.index].current,
          className: "header-nav-list-span_active",
        },
        // markers: true,
      });
    });
  }, [toursRef, aboutRef]);

  const scrollToEl = (index: number) => {
    const el = menuLists?.find((obj) => obj.index === index)?.ref;
    console.log(menuLists);
    if (!el) return;
    window.scrollTo({
      //? -50してるのはheaderの高さ分
      top: el.getBoundingClientRect().top + window.pageYOffset - 50,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header ref={headerRef} className="header">
        <div ref={navWrapper} className="nav-wrapper" />
        {topContainerRef && (
          <nav className="header-nav">
            <h1
              ref={headerHeadline}
              onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
              className="header-headline"
            >
              {title}
            </h1>
            <ul ref={ulRef} className="header-nav-ul">
              {manuList.map((text, index) => (
                <li
                  className="header-nav-list"
                  ref={headerNavList.current[index]}
                  onClick={() => scrollToEl(index)}
                  key={text}
                >
                  <span ref={headerNavListSpan.current[index]} className={`header-nav-list-span`}>
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
        )}
        {/* <span className="header-message" data-text="Test Message. Egypt. Trukey. Jordan">
          Test Message. Egypt. Trukey. Jordan
        </span> */}
      </header>
    </>
  );
};
