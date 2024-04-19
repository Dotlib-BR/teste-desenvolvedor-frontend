import { useState } from "react";
import "./styles.css";
import { Portal } from "../portal";
import { useOnClickOutside } from "@/hooks/on-click-outside";
interface ModalProps {
  children: React.ReactNode;
  renderOpenModalAction: (openModal: () => void) => React.ReactNode;
  modalTitle: string;
  bodyClassName?: string;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  renderOpenModalAction,
  modalTitle,
  bodyClassName = "",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const html = document.querySelector("html");
  const openModal = () => {
    html?.classList.add("overflow-hidden");
    html?.classList.add("h-full");
    setIsModalOpen(true);
  };
  const closeModal = () => {
    html?.classList.remove("overflow-hidden");
    html?.classList.remove("h-full");
    setIsModalOpen(false);
  };
  const ref = useOnClickOutside<HTMLDivElement>(closeModal);
  return (
    <>
      {renderOpenModalAction(openModal)}
      {isModalOpen && (
        <Portal useBody>
          <div className="modal">
            <div ref={ref} className="modal-content d-flex flex-col">
              <header className="modal-header">
                <h2>{modalTitle}</h2>
                <button onClick={() => setIsModalOpen(false)} className="close">
                  X
                </button>
              </header>
              <hr className="header-divider"/>
              <div className={`modal-body ${bodyClassName}`}>{children}</div>
              <footer className="modal-footer">
                <h3>Modal Footer</h3>
              </footer>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};
