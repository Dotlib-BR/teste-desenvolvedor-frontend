import { usePortal } from "@/hooks/portal";
import React, { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  id?: string;
  className?: string;
  useBody?: boolean;
}

export const Portal: React.FC<PropsWithChildren<PortalProps>> = ({
  children,
  id,
  className,
  useBody,
}) => {
  const targetElement = usePortal(id, className);
  return createPortal(children, useBody ? document.body : targetElement);
};
