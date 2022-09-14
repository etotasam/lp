import React, { useEffect } from "react";
//! css
import styles from "./header.module.scss";
import navStyles from "./nav.module.scss";
//! hooks
import { useTitleAnimation } from "./hooks/useTitleAnimation";
import { useNavAnimation } from "./hooks/useNavAnimation";
import { useWindowSize } from "@/hooks/useWindowSize";

export const Header = () => {
  const title = "トルコの旅";
  const navList = ["トルコの魅力", "News", "Tours", "Concept"];

  const containerRef = React.useRef<HTMLDivElement>(null);

  const { width, height } = useWindowSize();
  const [isPC, setIsPC] = React.useState<boolean | undefined>(undefined);

  //? windowの高さによってmodalのscaleの値を変更
  const calcScale = () => {
    if (height > 850) return 17;
    if (height > 750) return 15;
    if (height > 650) return 13;
    if (height > 550) return 10;
  };
  useEffect(() => {
    const scale = calcScale();
    console.log(scale);
    const root = window.document.querySelector(`:root`) as HTMLElement;
    root.style.setProperty(`--modal-scale`, `${scale}`);
  }, [height]);
  //? windowの幅でresponsive対応
  useEffect(() => {
    if (!width) return;
    setIsPC(700 < width);
  }, [width]);

  //? title
  const titelWrapperRef = React.useRef<HTMLHeadingElement>(null);
  const titleRef = React.useRef<HTMLDivElement>(null);
  const navWrapperRef = React.useRef<HTMLDivElement>(null);
  useTitleAnimation({ titelWrapperRef, titleRef, navWrapperRef, containerRef, isPC });

  //? nav
  const ulRef = React.useRef<HTMLUListElement>(null);
  const listRef = React.useRef<any>([]);
  const listInnerDivRef = React.useRef<any>([]);
  const hamburgerRef = React.useRef<HTMLDivElement>(null);
  const hamButtonRef = React.useRef<HTMLButtonElement>(null);
  //? create multiple Ref
  navList.forEach((_, i) => {
    listInnerDivRef.current[i] = React.createRef<HTMLDivElement>();
  });
  navList.forEach((_, i) => {
    listRef.current[i] = React.createRef<HTMLUListElement>();
  });

  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);
  useNavAnimation({ ulRef, listRef, listInnerDivRef, containerRef, isPC, hamburgerRef, hamButtonRef, isOpenModal });

  return (
    <>
      <div ref={containerRef} className={styles["container"]}>
        <div className={styles["bg-image"]} />

        <header className={`${styles["header"]}`}>
          {isPC ? (
            <div ref={navWrapperRef} className={`${styles["header-bar"]}`} />
          ) : (
            <>
              <div
                ref={hamburgerRef}
                className={`${styles["hamburger-wrapper"]} ${styles["default-hamburger-position"]}`}
              />
              <button
                ref={hamButtonRef}
                onClick={() => setIsOpenModal((v) => !v)}
                className={`${styles["hamburger"]} ${styles["default-hamburger-position"]}`}
              >
                <span>ぼたん</span>
              </button>
            </>
          )}

          <div
            ref={titelWrapperRef}
            className={`${styles["title"]}`}
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
          >
            <h1 ref={titleRef}>{title}</h1>
          </div>

          {/* //? nav */}
          {isPC && (
            <nav className={`${navStyles["nav"]}`}>
              <ul ref={ulRef} className={`${navStyles["nav-ul"]}`}>
                {navList.map((text, index) => (
                  <li key={text} ref={listRef.current[index]}>
                    <div key={text} className={`${navStyles["nav-list"]}`} ref={listInnerDivRef.current[index]}>
                      <span className={`${navStyles["nav-list-span"]}`}>{text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </header>
      </div>
    </>
  );
};
