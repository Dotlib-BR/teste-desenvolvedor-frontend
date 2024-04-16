"use client";

import { useContext } from "react";
import NestingLevelContext from "../_contexts/nesting-level";
import Heading from "./heading";

/** Properties for the {@link Section} component. */
export interface SectionProperties {
  /** Title of the section. */
  title: React.ReactNode;
  /** Content of the section. */
  children: React.ReactNode;
  /**
   * ClassName for the section (container for a heading and a content element).
   */
  className?: string;
  /** ClassName for the content element. */
  contentClassName?: string;
}

/**
 * A section that provides a {@link NestingLevelContext} to its contents.
 * @param properties - Properties for the component.
 */
export function Section(properties: SectionProperties) {
  const { currentLevel } = useContext(NestingLevelContext);

  return (
    <section className={properties.className ?? "contents"}>
      <Heading>{properties.title}</Heading>
      <NestingLevelContext.Provider
        value={{
          currentLevel: Math.max(0, Math.min(5, currentLevel + 1)) as
            | 0
            | 1
            | 2
            | 3
            | 4
            | 5,
        }}
      >
        <div className={properties.contentClassName ?? "contents"}>
          {properties.children}
        </div>
      </NestingLevelContext.Provider>
    </section>
  );
}

export default Section;
