import React from "react";
import { useQueryState } from "@/hooks/useQueryState";

export const Top = () => {
  const topContainer = React.useRef<HTMLDivElement>(null);
  const [topContainerRef, setTopContainerRef] = useQueryState<HTMLDivElement>(`ref/topContainer`);
  React.useEffect(() => {
    if (!topContainer.current) return;
    setTopContainerRef(topContainer.current);
  }, [topContainer]);
  const manuList = ["About", "Concept", "Tours", "News"];
  const headerNavList = React.useRef<any>([]);
  return (
    <>
      <div ref={topContainer} className="top-conteiner">
        <div className="top-content" />

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
