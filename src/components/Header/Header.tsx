import React from "react";
//! css
import styles from "./header.module.scss";
import navStyles from "./nav.module.scss";
//! hooks
import { useQueryState } from "@/hooks/useQueryState";
import { useTitleAnimation } from "./hooks/useTitleAnimation";
import { useNavAnimation } from "./hooks/useNavAnimation";
export const Header = () => {
  const title = "トルコの旅";
  const navList = ["トルコの魅力", "News", "Tours", "Concept"];
  const [topContainerEl] = useQueryState<HTMLDivElement>(`ref/topContainer`);

  //? title
  const titelWrapperRef = React.useRef<HTMLHeadingElement>(null);
  const titleRef = React.useRef<HTMLDivElement>(null);
  const navWrapperRef = React.useRef<HTMLDivElement>(null);
  useTitleAnimation({ titelWrapperRef, titleRef, navWrapperRef });

  //? nav
  const ulRef = React.useRef<HTMLUListElement>(null);
  const listRef = React.useRef<any>([]);
  const listInnerDivRef = React.useRef<any>([]);
  //? create multiple Ref
  navList.forEach((_, i) => {
    listInnerDivRef.current[i] = React.createRef<HTMLDivElement>();
  });
  navList.forEach((_, i) => {
    listRef.current[i] = React.createRef<HTMLUListElement>();
  });
  useNavAnimation({ ulRef, listRef, listInnerDivRef });

  return (
    <>
      <header className={`${styles["header"]}`}>
        <div ref={navWrapperRef} className={`${styles["header-bar"]}`} />
        {topContainerEl && (
          <div>
            <div
              ref={titelWrapperRef}
              className={`${styles["title"]}`}
              onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
            >
              <h1 ref={titleRef}>{title}</h1>
            </div>

            {/* //? nav */}
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
          </div>
        )}
      </header>
    </>
  );
};
