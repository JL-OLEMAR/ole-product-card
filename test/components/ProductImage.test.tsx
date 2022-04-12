import * as React from 'react';
import renderer from 'react-test-renderer';

import { product2 } from '../data/products';
import {  ProductCard, ProductImage } from '../../src/components';

describe('ProductImage', () => {
  test('should display the component correctly with the Image', () => {
    const wrapper = renderer.create(
      <ProductImage img="https://hello.jpg" className="custom-class" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should display the component with the product image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
