import { createContext } from "react";

/**
 * Context type that stores the current section nesting level.
 * Only works if components correctly implement providers.
 */
export interface NestingLevelContext {
  /** Current nesting level. */
  readonly currentLevel: 0 | 1 | 2 | 3 | 4 | 5;
}

/** Default values for {@link NestingLevelContext}. */
export const nestingLevelContextDefaults: NestingLevelContext = {
  currentLevel: 0,
};

/**
 * Context that stores the current section nesting level.
 * Only works if components correctly implement providers.
 */
export const NestingLevelContext = createContext<NestingLevelContext>({
  ...nestingLevelContextDefaults,
});

export default NestingLevelContext;
