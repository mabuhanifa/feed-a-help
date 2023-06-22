import { createContext, useReducer, type ReactNode } from "react";
import { initialState, reducer } from "./reducer";

export const Context = createContext({} as MainState);

export const Provider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
