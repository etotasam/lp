import styles from "./button.module.scss";

type PropsType = React.ComponentProps<"button">;

export const Button = ({ children }: PropsType) => {
  return <button className={`${styles.button}`}>{children}</button>;
};
