"use client";

import Link from "next/link";

/** A button that does something when clicked. */
interface ClickButtonProperties {
  onClick: (event: React.MouseEvent) => void;
}

/** A button that submits a form when clicked. */
interface SubmitButtonProperties {
  submit: true;
}

/** A button that goes to a link when click. */
interface LinkButtonProperties {
  /** URL to navigate to. */
  href: string;
}

interface CommonButtonProperties {
  /** Button contents. */
  children: React.ReactNode;
}

/** Properties for the {@link Button} component. */
export type ButtonProperties = CommonButtonProperties &
  (ClickButtonProperties | SubmitButtonProperties | LinkButtonProperties);

/**
 * A button component.
 * @param properties - Properties for the component.
 */
export function Button(properties: ButtonProperties) {
  if ("href" in properties) {
    return (
      <Link
        href={properties.href}
        className="inline-block rounded-lg bg-gray-200 px-4 py-2"
      >
        {properties.children}
      </Link>
    );
  }

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
