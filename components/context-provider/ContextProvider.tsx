"use client";
import {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Define interface for context values
interface StateContextType {
  openCartToggle: boolean;
  setOpenCartToggle: (value: boolean) => void;
  toggleCart: () => void;
  cartItems: any[];
  setCartItems: (value: any[]) => void;
  addToCart: (cartData: any) => void;
}

// Create context with a better-typed default value
const StateContext = createContext<StateContextType>({
  openCartToggle: false,
  setOpenCartToggle: () => {},
  toggleCart: () => {},
  cartItems: [],
  setCartItems: () => {},
  addToCart: () => {},
});

// Provider Component
export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [openCartToggle, setOpenCartToggle] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<any>([]);

  // To Toggle SideBar for Product Cart
  const toggleCart = () => {
    setOpenCartToggle((prev) => !prev);
  };

  // Load cart data from localStorage on mount
  useEffect(() => {
    const storedCartData = localStorage.getItem("cartData");
    if (storedCartData) {
      setCartItems(JSON.parse(storedCartData));
    }
  }, []);

  // To send the ProductData to Product Cart
  const addToCart = (product: any) => {
    setCartItems((prevCart: any) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cartData", JSON.stringify(updatedCart));
      return updatedCart;
    });
    return toggleCart();
  };

  return (
    <StateContext.Provider
      value={{
        openCartToggle,
        setOpenCartToggle,
        toggleCart,
        cartItems,
        setCartItems,
        addToCart,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// Custom hook for easier usage
export const useCart = () => useContext(StateContext);
