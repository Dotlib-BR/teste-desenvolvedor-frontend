import { useEffect, useRef } from "react";

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
    handler: (ev: MouseEvent | TouchEvent) => void
  ) {
    const ref = useRef<T>(null);
    useEffect(() => {
      if (!ref) return;
      const listener = (event: MouseEvent | TouchEvent) => {
        const el = ref?.current;
        if (!el || el.contains(event.target as Node)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }, [ref, handler]);

    return ref;
  }