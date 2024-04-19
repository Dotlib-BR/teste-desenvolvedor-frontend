import React, { useEffect } from 'react';


export const usePortal = (id?: string, className?: string) => {
  const elementRef = React.useRef(document.createElement('div'));

  useEffect(() => {
    const existingParent = document.querySelector(
      `${id ? '#' + id : '.' + className}`
    );

    if (existingParent) {
      existingParent.appendChild(elementRef.current);
    }

    return function removeElement() {
      elementRef.current.remove();
      if (existingParent && !existingParent?.childElementCount) {
        existingParent.remove();
      }
    };
  }, [id, className]);

  const getRootElem = () => {
    if (!elementRef.current) {
      elementRef.current = document.createElement('div');
    }
    return elementRef.current;
  };

  return getRootElem();
};