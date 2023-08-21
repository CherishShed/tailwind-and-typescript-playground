import { createContext, useState } from "react";
type ModalProps = { children: JSX.Element };
type ContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ModalContext = createContext({} as ContextType);

export const ModalContextProvider = ({ children }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
