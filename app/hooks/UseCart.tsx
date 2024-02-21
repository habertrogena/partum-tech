"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { CartProductType } from "../product/ProductDetails";

export type CartContextType = {
  cartTotalQty: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
  //   handleRemoveProductFromCart: (product: CartProductType) => void;
  //   handleItemQtyIncrease: (product: CartProductType) => void;
  //   handleItemQtyDecrease: (product: CartProductType) => void;
  //   handleClearCart: () => void;
};
export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQty, setCartTotalQuantity] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );

  //   useEffect(() => {
  //     const updatedCartItems: any = localStorage.getItem('Jirani Cart Product');
  //     const cProduct: CartProductType[] | null = JSON.parse(updatedCartItems);
  //     setCartItems(cProduct);
  //   }, []);

  const handleAddProductToCart = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      let updatedCart;

      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
      }
      // toast.success('Product Added to Cart');
      // localStorage.setItem('Jirani Cart Product', JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  //   const handleRemoveProductFromCart = useCallback((product: CartProductType) => {
  //     if(cartItems) {
  //       const filteredItems = cartItems.filter((item) => {
  //         return item.id !== product.id;
  //       });
  //       setCartItems(filteredItems);
  //       toast.success('Product Removed From Cart');
  //       localStorage.setItem('Jirani Cart Product', JSON.stringify(filteredItems))
  //     }
  //   }, [cartItems])

  //   const handleItemQtyIncrease = useCallback((product: CartProductType) => {
  //     let updatedCart;

  //     if(product.quantity === 30) {
  //       return toast.error('Ooops!!! Maximum Reached')
  //     };
  //     if(cartItems) {
  //       updatedCart = [...cartItems]
  //       const existingIndex = cartItems.findIndex((item) => item.id === product.id)
  //       if(existingIndex > -1) {
  //         updatedCart[existingIndex].quantity = ++updatedCart[existingIndex].quantity
  //       }
  //       setCartItems(updatedCart);
  //       localStorage.setItem("Jirani Cart Product", JSON.stringify(updatedCart));
  //     };
  //   }, [cartItems])

  //   const handleItemQtyDecrease = useCallback((product: CartProductType) => {
  //     let updatedCart;

  //     if(product.quantity === 1) {
  //       return toast.error('Ooops!!! Manimum Reached')
  //     };
  //     if(cartItems) {
  //       updatedCart = [...cartItems]
  //       const existingIndex = cartItems.findIndex((item) => item.id === product.id)
  //       if(existingIndex > -1) {
  //         updatedCart[existingIndex].quantity = --updatedCart[existingIndex].quantity
  //       }
  //       setCartItems(updatedCart);
  //       localStorage.setItem("Jirani Cart Product", JSON.stringify(updatedCart));
  //     };
  //   }, [cartItems])

  //   const handleClearCart = useCallback(() => {
  //     setCartItems(null);
  //     setCartTotalQuantity(0);
  //     localStorage.removeItem("Jirani Cart Product");
  //   }, [cartItems])

  const value = {
    cartTotalQty,
    cartProducts,
    handleAddProductToCart,
  };
  return <CartContext.Provider value={value} {...props} />;
};

export const UseCart = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
};
