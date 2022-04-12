import * as React from 'react';
import renderer from 'react-test-renderer';

import { product1 } from '../data/products';
import { ProductCard, ProductTitle } from '../../src/components';

describe('ProductTitle', () => {
  test('should display the component correctly with the custom title', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Custom Title" className="custom-class" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should display the component with the product name', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
