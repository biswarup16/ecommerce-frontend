"use client";
import {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface StateContextType {
  openCartToggle: boolean;
  setOpenCartToggle: (value: boolean) => void;
  toggleCart: () => void;
  cartItems: any[];
  setCartItems: (value: any[]) => void;
  addToCart: (cartData: any) => void;
  subtotal: number;
  totalValue: number;
}

const StateContext = createContext<StateContextType>({
  openCartToggle: false,
  setOpenCartToggle: () => {},
  toggleCart: () => {},
  cartItems: [],
  setCartItems: () => {},
  addToCart: () => {},
  subtotal: 0,
  totalValue: 0,
});

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [openCartToggle, setOpenCartToggle] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<any>([]);
  const [promocode, setPromocode] = useState("");

  const toggleCart = () => {
    setOpenCartToggle((prev) => !prev);
  };

  useEffect(() => {
    const storedCartData = localStorage.getItem("cartData");
    if (storedCartData) {
      setCartItems(JSON.parse(storedCartData));
    }
  }, []);

  const addToCart = (product: any) => {
    setCartItems((prevCart: any) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cartData", JSON.stringify(updatedCart));
      return updatedCart;
    });
    toggleCart();
  };

  // Calculate subtotal
  const calculateSubtotal = () => {
    return Math.round(
      cartItems.reduce(
        (total: any, item: any) =>
          total + item.variant_price * item.product_quantity,
        0
      )
    );
  };

  const subtotal = calculateSubtotal();

  // Calculate total with discount and tax
  const calculateTotal = () => {
    const discount = promocode === "WELCOME20" ? subtotal * 0.2 : 0;
    const discountedSubtotal = subtotal - discount;
    const tax = discountedSubtotal * 0.3;
    return Math.round(discountedSubtotal + tax);
  };

  const totalValue = calculateTotal();

  return (
    <StateContext.Provider
      value={{
        openCartToggle,
        setOpenCartToggle,
        toggleCart,
        cartItems,
        setCartItems,
        addToCart,
        subtotal,
        totalValue,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// Custom hook for easier usage
export const useCart = () => useContext(StateContext);
