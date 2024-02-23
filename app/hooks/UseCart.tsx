"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { CartProductType } from "../product/ProductDetails";
import toast from "react-hot-toast";

export type CartContextType = {
  cartTotalQty: number;
  cartTotalAmount: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
  handleRemoveProductFromCart: (product: CartProductType) => void;
  handleItemQtyIncrease: (product: CartProductType) => void;
    handleItemQtyDecrease: (product: CartProductType) => void;
    handleClearCart: () => void;
};
export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQty, setCartTotalQuantity] = useState(0);
  const [cartTotalAmount,setCartTotalAmount] = useState(0)
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );

  console.log('qty',cartTotalQty);
  console.log('amount',cartTotalAmount);

  useEffect(() => {
    const updatedCartItems: any = localStorage.getItem("Cart Product");
    const cProduct: CartProductType[] | null = JSON.parse(updatedCartItems);
    setCartProducts(cProduct);
  }, []);

  useEffect(()=>{
    const getTotals =()=> {
      if (cartProducts){
        const {total ,quantity}= cartProducts?.reduce((acc,item)=>{
          const itemTotal= item.price*item.quantity;
          acc.total+=itemTotal;
          acc.quantity+=item.quantity;
          return acc;
          
        },{
          total:0,quantity:0
        });

        setCartTotalQuantity(quantity);
        setCartTotalAmount(total);
      }

    }
    getTotals()

  },[cartProducts])

  const handleAddProductToCart = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      let updatedCart;

      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
      }
      toast.success(`${product.name} added to your cart!`);
      localStorage.setItem("Cart Product", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  const handleRemoveProductFromCart = useCallback(
    (product: CartProductType) => {
      if (cartProducts) {
        const filteredItems = cartProducts.filter((item) => {
          return item.id !== product.id;
        });
        setCartProducts(filteredItems);
        toast.success("Product Removed From Cart");
        localStorage.setItem(" Cart Product", JSON.stringify(filteredItems));
      }
    },
    [cartProducts]
  );

  const handleItemQtyIncrease = useCallback(
    (product: CartProductType) => {
      let updatedCart;

      if (product.quantity == 30) {
        return toast.error("Ooops!!! Maximum Reached");
      }
      if (cartProducts) {
        updatedCart = [...cartProducts];
        const existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );
        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity = ++updatedCart[existingIndex]
            .quantity;
        }
        setCartProducts(updatedCart);
        localStorage.setItem(" Cart Product", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

    const handleItemQtyDecrease = useCallback((product: CartProductType) => {
      let updatedCart;

      if(product.quantity === 1) {
        return toast.error('Ooops!!! Minimum Reached')
      };
      if(cartProducts) {
        updatedCart = [...cartProducts]
        const existingIndex = cartProducts.findIndex((item) => item.id === product.id)
        if(existingIndex > -1) {
          updatedCart[existingIndex].quantity = --updatedCart[existingIndex].quantity
        }
        setCartProducts(updatedCart);
        localStorage.setItem(" Cart Product", JSON.stringify(updatedCart));
      };
    }, [cartProducts])

    const handleClearCart = useCallback(() => {
      setCartProducts(null);
      setCartTotalQuantity(0);
      localStorage.removeItem("Jirani Cart Product");
    }, [cartProducts])

  const value = {
    cartTotalQty,
    cartTotalAmount,
    cartProducts,
    handleAddProductToCart,
    handleRemoveProductFromCart,
    handleItemQtyIncrease,
    handleItemQtyDecrease,
    handleClearCart
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
