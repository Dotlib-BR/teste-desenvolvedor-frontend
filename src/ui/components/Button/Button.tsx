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
  disabled,
  iconButton,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled ? "disabled" : "";
  const isIconButton = iconButton ? "icon-button" : "";
  const isColor = color ? color : "primary";
  const isSearch =
    search === "left" ? "left" : search === "right" ? "right" : "";
  const buttonClassName = `button ${isSearch} ${[isColor]} ${
    variant && `${[variant]}`
  } ${fullWidth && "fullWidth"} ${isIconButton} ${isDisabled}`;

  return (
    <button {...props} className={buttonClassName}>
      {children}
    </button>
  );
};
