export interface Product {
  id: string
  title: string
  img?: string
}

// Context
export interface ProductContextProps {
  counter: number
  product: Product
  maxCount?: number
  increaseBy: (value: number) => void
}

export interface InitialValues {
  count?: number
  maxCount?: number
}

interface ProductCardHandlers {
  product: Product
  count: number
  isMaxCountReached: boolean
  maxCount?: number
  increaseBy: (value: number) => void
  reset: () => void
}

export interface OnChangeArgs {
  count: number
  product: Product
}

export interface ProductCardProps {
  product: Product
  className?: string
  style?: React.CSSProperties
  value?: number
  initialValues?: InitialValues
  children: (args: ProductCardHandlers) => JSX.Element
  onChange?: (args: OnChangeArgs) => void
}

export interface ProductButtonsProps {
  className?: string
  style?: React.CSSProperties
  maxCount?: number
}

export interface ProductImageProps {
  className?: string
  img?: string
  style?: React.CSSProperties
}

export interface ProductTitleProps {
  className?: string
  title?: string
  style?: React.CSSProperties
}

// Props or props destructuring (is the same)
export interface ProductCardHOCProps {
  (Props: ProductCardProps): JSX.Element
  Buttons: (Props: ProductButtonsProps) => JSX.Element
  Image: ({ img, className, style }: ProductImageProps) => JSX.Element
  Title: (Props: ProductTitleProps) => JSX.Element
}
