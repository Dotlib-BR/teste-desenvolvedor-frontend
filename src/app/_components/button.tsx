/** A button that does something when clicked. */
interface ClickButtonProperties {
  onClick: (event: React.MouseEvent) => void;
}

/** A button that submits a form when clicked. */
interface SubmitButtonProperties {
  submit: true;
}

interface CommonButtonProperties {
  /** Button contents. */
  children: React.ReactNode;
}

/** Properties for the {@link Button} component. */
export type ButtonProperties = CommonButtonProperties &
  (ClickButtonProperties | SubmitButtonProperties);

/**
 * A button component.
 * @param properties - Properties for the component.
 */
export function Button(properties: ButtonProperties) {
  return (
    <button
      type={"submit" in properties && properties.submit ? "submit" : "button"}
      onClick={"onClick" in properties ? properties.onClick : undefined}
      className="rounded-lg bg-gray-200 px-4 py-2"
    >
      {properties.children}
    </button>
  );
}

export default Button;
