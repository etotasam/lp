import React from "react";
import styles from "./testbutton.module.scss";

type extraProps = {
  bgColor: "red" | "blue";
};

type PropsType = React.ComponentProps<"button"> & extraProps;

export const TestButton = ({ children, bgColor = "red", className }: PropsType) => {
  return <button className={`${styles[`${bgColor}`]} ${styles[`${className}`]}`}>{children}</button>;
};
