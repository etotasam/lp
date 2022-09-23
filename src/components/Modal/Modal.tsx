import React from "react";
// import { useCheckDevice } from "@/hooks/useCheckDevice";
import styles from "./modal.module.scss";

export type Props = {
  loaded: boolean | undefined;
};

export const Modal = ({ loaded }: Props) => {
  // const { isMobile } = useCheckDevice();
  return <div className={`${styles["container"]} ${loaded ? styles[`anime`] : ``}`}>Modal</div>;
};
