"use client";

import { useContext, createContext, useState } from "react";

// create context
const StateContext = createContext({
  openCartToggle: false,
  setOpenCartToggle: (value: boolean) => {},
  toggleCart: () => {},
});

// Provider Component

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [openCartToggle, setOpenCartToggle] = useState<boolean>(false);
  const toggleCart = () => setOpenCartToggle((prev) => !prev);

  return (
    <StateContext.Provider
      value={{ openCartToggle, setOpenCartToggle, toggleCart }}
    >
      {children}
    </StateContext.Provider>
  );
};

// Custom hook for easier usage
export const useCart = () => useContext(StateContext);
