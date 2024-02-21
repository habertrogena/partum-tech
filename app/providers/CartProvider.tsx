import React from 'react';
import { CartContextProvider } from '../hooks';


export interface CartProviderProp {
    children: React.ReactNode;
}

export function CartProvider({ children }: CartProviderProp) {
    return (
    <CartContextProvider>
        {children}
    </CartContextProvider>
)
}