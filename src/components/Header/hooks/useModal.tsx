import React from "react";
import gsap from "gsap";
type Props = {
  modaleListRef: React.MutableRefObject<any>;
};

export const useModal = ({ modaleListRef }: Props) => {
  React.useEffect(() => {
    const tl: gsap.core.Timeline[] = [];
    modaleListRef.current.forEach((list: any, index: number) => {
      tl[index] = gsap.timeline({});
      tl[index].fromTo(
        list.current,
        {
          scale: 0,
        },
        {
          scale: 1.3,
          duration: 0.1,
          delay: (index + 3) * 0.1,
        }
      );
      tl[index].to(list.current, {
        scale: 1,
        duration: 0.6,
      });
    });
  }, []);
};
