"use client";

import { useContext } from "react";
import NestingLevelContext from "../_contexts/nesting-level";

/** Properties for the {@link Heading} component. */
export interface HeadingProperties {
  /** The content of the heading. */
  children: React.ReactNode;
}

/**
 * A heading with an automatically inferred nesting level.
 * @param properties - Properties for the component.
 */
export function Heading(properties: HeadingProperties) {
  const { currentLevel } = useContext(NestingLevelContext);

  switch (currentLevel) {
    case 0:
      return (
        <h1 className="text-2xl font-bold text-teal-500">
          {properties.children}
        </h1>
      );
    case 1:
      return (
        <h2 className="text-xl font-bold text-teal-500">
          {properties.children}
        </h2>
      );
    case 2:
      return (
        <h3 className="text-lg font-bold text-teal-500">
          {properties.children}
        </h3>
      );
    case 3:
      return (
        <h4 className="text-base font-bold text-teal-500">
          {properties.children}
        </h4>
      );
    case 4:
      return (
        <h5 className="text-base font-bold text-teal-500">
          {properties.children}
        </h5>
      );
    case 5:
      return (
        <h6 className="text-base font-bold text-teal-500">
          {properties.children}
        </h6>
      );
  }
}

export default Heading;
