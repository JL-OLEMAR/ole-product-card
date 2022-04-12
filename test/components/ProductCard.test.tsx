import * as React from 'react';
import renderer from 'react-test-renderer';

import { product1 } from '../data/products';
import {  ProductCard } from '../../src/components';

const { act } = renderer;

describe('ProductCard', () => {
  test('should display the component correctly', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => <h1>Product Card</h1>}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should increment the counter', () => { 
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {({count, increaseBy}) => (
          <>
            <h1>Product Card</h1>
            <span>{count}</span>
            <button onClick={()=> increaseBy(1)} />
          </>
        )}
      </ProductCard>
    );

    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();

    act(() => {
      (tree as any).children[2].props.onClick();
    })

    tree = wrapper.toJSON();
    expect((tree as any).children[1].children[0]).toBe("1");
  })
});
