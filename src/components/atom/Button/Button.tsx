type PropsType = React.ComponentProps<"button">;

export const Button = ({ children }: PropsType) => {
  return <button>{children}</button>;
};
