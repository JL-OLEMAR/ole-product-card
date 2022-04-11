# Ole-Product-Card

This is a test package of deployment on npm.

### José Luis Olemar

## Example

```tsx
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'ole-product-card';
```

```tsx
<ProductCard initialValues={{ count: 4, maxCount: 10 }} product={product}>
  {({ product, count, isMaxCountReached, maxCount, increaseBy, reset }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
