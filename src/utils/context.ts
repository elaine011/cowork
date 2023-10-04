import { createContext, Dispatch, SetStateAction } from "react";

type ContextType = {
  model: string;
  color: string;
  capacity: string;
  price: number;
  id: number;
};

type CreateContextType = {
  selectedProducts: [ContextType, Dispatch<SetStateAction<ContextType>>];
};

export const Context = createContext({} as CreateContextType);
