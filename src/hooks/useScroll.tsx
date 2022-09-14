import { useEffect, useState, useRef } from "react";

export const useScroll = () => {
  const [isScroll, setIsScroll] = useState(false);
  const timeoutId = useRef<NodeJS.Timeout | undefined>(undefined);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScroll(true);

      clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        setIsScroll(false);
      }, 500);
    });
  }, []);

  return { isScroll };
};
