import React, { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import {
  ProductCardProps,
  ProductContextProps,
} from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

// Here, create a context that will be used by ProductCard.
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

// Component Main ProductCard, and Provider to the children
export function ProductCard({
  className,
  style,
  product,
  value,
  initialValues,
  children,
  onChange,
}: ProductCardProps) {
  const {
    counter,
    maxCount,
    isMaxCountReached,
    increaseBy,
    reset,
  } = useProduct({ product, value, initialValues, onChange });

  return (
    <Provider value={{ counter, maxCount, product, increaseBy }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          product,
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
}
