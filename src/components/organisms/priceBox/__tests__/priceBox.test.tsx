import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';

import PriceBox, {PriceBoxPropsType} from '../index';

const getComponent = (props: PriceBoxPropsType) => {
  return <PriceBox {...props} />;
};

it('initial render button', () => {
  renderer.create(
    getComponent({
      value: true,
    }),
  );
});

it('Primary PriceBox', () => {
  const props: PriceBoxPropsType = {
    value: true,
    title: 'YEARLY ACCESS',
    price: '$0,11/day',
    boldPrice: '$39.99/year',
  };
  const RenderedComponent = renderer.create(getComponent(props)).toJSON();
  expect(RenderedComponent).toMatchSnapshot();
});

it('Primary PriceBox', () => {
  const props: PriceBoxPropsType = {
    value: false,
    title: 'YEARLY ACCESS',
    price: '$0,11/day',
    boldPrice: '$39.99/year',
  };
  const RenderedComponent = renderer.create(getComponent(props)).toJSON();
  expect(RenderedComponent).toMatchSnapshot();
});
