import { formatCurrencyBRL } from 'container/formatCurrencyBRL';
import React, { createContext, FC, useCallback, useContext, useMemo, useState } from 'react';

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartContextTypes {
  products: Product[] | undefined;
  totalCart: string;
  totalItems: number;
  addProductToCart: (_: Product) => void;
  increaseQuantity: (_: Product) => void;
  decreaseQuantity: (_: Product) => void;
  removeItemCart: (_: Product) => void;
  resetCart: () => void;
}

export const CartContext = createContext<CartContextTypes>({} as CartContextTypes);

export const CartProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [products, setCart] = useState<Product[]>([]);

  const removeItemCart = useCallback(
    (product: Product) => {
      const updatedCart = products?.filter(item => item.id !== product.id);

      setCart(updatedCart);
    },
    [products, setCart]
  );

  const increaseQuantity = useCallback(
    (product: Product) => {
      const updatedCart = products?.map(item => {
        const isMatched = item.id === product.id;

        const quantity = item.quantity + 1;

        if (isMatched) return { ...item, quantity };

        return item;
      });

      setCart(updatedCart);
    },
    [products, setCart]
  );

  const decreaseQuantity = useCallback(
    (product: Product) => {
      if (product.quantity === 1) {
        return;
      }

      const updatedCart = products?.map(item => {
        const isMatched = item.id === product.id;

        const quantity = item.quantity - 1;

        if (isMatched) return { ...item, quantity };

        return item;
      });

      setCart(updatedCart);
    },
    [products, setCart]
  );

  const addProductToCart = useCallback(
    (product: Product) => {
      const matchProductIndex = products?.findIndex(({ id }) => product.id === id);

      const hasAdded = matchProductIndex !== -1 && matchProductIndex !== undefined;

      if (hasAdded) return increaseQuantity(product);

      const updatedCart = [...(products || []), { ...product, quantity: 1 }];

      setCart(updatedCart);
    },
    [products, setCart]
  );

  const resetCart = useCallback(() => {
    setCart([]);
  }, []);

  const totalCart = formatCurrencyBRL(
    useMemo(() => products.reduce((acc, prod) => prod.price * prod.quantity + acc, 0), [products])
  );

  const totalItems = useMemo(() => products.length ?? 0, [products]);

  const value = useMemo(
    () => ({
      products,
      totalCart,
      totalItems,
      addProductToCart,
      increaseQuantity,
      decreaseQuantity,
      removeItemCart,
      resetCart,
    }),
    [
      products,
      totalCart,
      totalItems,
      addProductToCart,
      decreaseQuantity,
      increaseQuantity,
      removeItemCart,
      resetCart,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) throw Error('Cannot use "useCart" outside CartProvider');

  return context;
};
