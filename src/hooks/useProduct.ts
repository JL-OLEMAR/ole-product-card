import { useEffect, useRef, useState } from 'react'

import { InitialValues, OnChangeArgs, Product } from '../interfaces/interfaces'

interface useProductProps {
  product: Product
  value?: number
  onChange?: (args: OnChangeArgs) => void
  initialValues?: InitialValues
}

export function useProduct({
  product,
  value = 0,
  onChange,
  initialValues
}: useProductProps) {
  const [counter, setCounter] = useState<number>(initialValues?.count || value)
  const isMounted = useRef<boolean>(false)

  const increaseBy = (num: number) => {
    let newValue = Math.max(counter + num, 0)

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues?.maxCount)
    }

    setCounter(newValue)
    onChange && onChange({ count: newValue, product })
  }

  const reset = () => {
    setCounter(initialValues?.count || value)
  }

  useEffect(() => {
    if (!isMounted.current) return
    setCounter(value)
  }, [value])

  useEffect(() => {
    isMounted.current = true
  }, [])

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset
  }
}
