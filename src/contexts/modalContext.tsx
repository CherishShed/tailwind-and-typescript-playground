import { createContext, useState } from "react";
type ModalProps = { children: JSX.Element };
type ContextType = {
  isOpen: ModalData;
  setIsOpen: React.Dispatch<React.SetStateAction<ModalData>>;
};
type ModalData = {
  isOpen: boolean;
  id: number | null;
  data: {
    image: string;
    title: string;
    category: string;
    description: string;
    price: number;
  } | null;
};
export const ModalContext = createContext({} as ContextType);

export const ModalContextProvider = ({ children }: ModalProps) => {
  const [isOpen, setIsOpen] = useState({
    id: null,
    isOpen: false,
    data: {},
  } as ModalData);
  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
