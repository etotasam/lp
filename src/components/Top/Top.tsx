import React from "react";
import { useQueryState } from "@/hooks/useQueryState";
import styles from "./top.module.scss";

export const Top = () => {
  const topContainerRef = React.useRef<HTMLDivElement>(null);
  const topContent = React.useRef<HTMLDivElement>(null);
  const [topContainerEl, setTopContainerEl] = useQueryState<HTMLDivElement>(`ref/topContainer`);
  const [topContentEl, setTopContentEl] = useQueryState<HTMLDivElement>(`ref/topContent`);
  React.useEffect(() => {
    if (!topContainerRef.current || !topContent.current) return;
    setTopContentEl(topContent.current);
    setTopContainerEl(topContainerRef.current);
  }, [topContainerRef, topContent]);

  return (
    <>
      <div ref={topContainerRef} className={styles["top-conteiner"]}>
        <div ref={topContent} className={styles["top-content"]} />

        {/* <ul className="test-ul">
          {manuList.map((title, index) => (
            <li className="test-li" ref={headerNavList.current[index]} key={title}>
              {title}
            </li>
          ))}
        </ul> */}
      </div>
    </>
  );
};
