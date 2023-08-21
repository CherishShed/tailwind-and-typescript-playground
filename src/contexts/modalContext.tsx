import { createContext, useState } from "react";
type ModalProps = { children: JSX.Element };
type ContextType = {
  isOpen: ModalData;
  setIsOpen: React.Dispatch<React.SetStateAction<ModalData>>;
};
type ModalData = { isOpen: boolean; id: number | null };
export const ModalContext = createContext({} as ContextType);

export const ModalContextProvider = ({ children }: ModalProps) => {
  const [isOpen, setIsOpen] = useState({} as ModalData);
  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
