import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "error";
  variant?: "outlined";
  fullWidth?: boolean;
  search?: "left" | "right";
}

export const Button = ({
  children,
  color,
  variant,
  fullWidth,
  search,
  ...props
}: ButtonProps) => {
  const isColor = color ? color : "primary";
  const isSearch = search === "left" ? "left" : "right";
  const buttonClassName = `button ${isSearch} ${[isColor]} ${
    variant && `${[variant]}`
  } ${fullWidth && "fullWidth"}`;

  return (
    <button {...props} className={buttonClassName}>
      {children}
    </button>
  );
};
