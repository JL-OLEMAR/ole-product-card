import React, { useContext } from 'react'

import { ProductImageProps } from '../interfaces/interfaces'
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

import { ProductContext } from './ProductCard'

export function ProductImage({ img, className, style }: ProductImageProps) {
  const { product } = useContext(ProductContext)
  let imgToShow: string

  if (img) {
    imgToShow = img
  } else if (product.img) {
    imgToShow = product.img
  } else {
    imgToShow = noImage
  }

  return (
    <img
      alt='Product image'
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      style={style}
    />
  )
}
