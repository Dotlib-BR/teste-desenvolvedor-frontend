import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "error";
  variant?: "outlined";
  fullWidth?: boolean;
  search?: "left" | "right";
  iconButton?: boolean;
}

export const Button = ({
  children,
  color,
  variant,
  fullWidth,
  search,
  iconButton,
  ...props
}: ButtonProps) => {
  const isIconButton = iconButton ? "icon-button" : "";
  const isColor = color ? color : "primary";
  const isSearch =
    search === "left" ? "left" : search === "right" ? "right" : "";
  const buttonClassName = `button ${isSearch} ${[isColor]} ${
    variant && `${[variant]}`
  } ${fullWidth && "fullWidth"} ${isIconButton}`;

  return (
    <button {...props} className={buttonClassName}>
      {children}
    </button>
  );
};
