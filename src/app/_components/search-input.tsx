"use client";

import { MutableRefObject, useEffect, useRef } from "react";

/** Properties for the {@link SearchInput} component. */
interface SearchInputProperties {
  /** Current value of the input. */
  value?: string | undefined;
  /**
   * Ref that receives the current value of the input. This can be used to avoid
   * re-rendering components when the value changes.
   */
  valueRef?: MutableRefObject<string> | undefined;
  /** Listener for the input `change` event. */
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  /** Placeholder for the input. */
  placeholder: string;
}

/**
 * A search input.
 * @param properties - Properties for the component.
 */
export function SearchInput(properties: SearchInputProperties) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current != null && properties.valueRef != null)
      properties.valueRef.current = inputRef.current.value;
  }, [properties.value, properties.valueRef]);

  return (
    <input
      ref={inputRef}
      type="text"
      value={properties.value}
      placeholder={properties.placeholder}
      onChange={(event) => {
        if (properties.valueRef != null)
          properties.valueRef.current = event.target.value;
        properties.onChange?.(event);
      }}
      className="rounded-lg bg-gray-100 px-4 py-2 outline outline-1 outline-teal-500 focus:outline-2"
    ></input>
  );
}

export default SearchInput;
