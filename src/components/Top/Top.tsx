import React from "react";
import { useQueryState } from "@/hooks/useQueryState";

export const Top = () => {
  const topContainer = React.useRef<HTMLDivElement>(null);
  const topContent = React.useRef<HTMLDivElement>(null);
  const [topContainerRef, setTopContainerRef] = useQueryState<HTMLDivElement>(`ref/topContainer`);
  const [topContentEl, setTopContentEl] = useQueryState<HTMLDivElement>(`ref/topContent`);
  React.useEffect(() => {
    if (!topContainer.current || !topContent.current) return;
    setTopContentEl(topContent.current);
    setTopContainerRef(topContainer.current);
  }, [topContainer, topContent]);
  const manuList = ["About", "Concept", "Tours", "News"];
  const headerNavList = React.useRef<any>([]);
  return (
    <>
      <div ref={topContainer} className="top-conteiner">
        <div ref={topContent} className="top-content" />

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
