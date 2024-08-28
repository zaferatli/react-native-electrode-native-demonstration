import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';

import Switch, {SwitchPropsType} from '../index';

const getComponent = (props: SwitchPropsType) => {
  return <Switch {...props} />;
};

it('initial render button', () => {
  renderer.create(getComponent({}));
});

it('Primary Switch', () => {
  const props: SwitchPropsType = {
    value: true,
  };
  const RenderedComponent = renderer.create(getComponent(props)).toJSON();
  expect(RenderedComponent).toMatchSnapshot();
});

it('Primary Switch With Color', () => {
  const props: SwitchPropsType = {
    trackColorFalse: 'red',
    trackColorTrue: 'green',
    thumbColorFalse: 'white',
    thumbColorTrue: 'white',
    value: true,
  };
  const RenderedComponent = renderer.create(getComponent(props)).toJSON();
  expect(RenderedComponent).toMatchSnapshot();
});

it('Primary Switch With Color False State', () => {
  const props: SwitchPropsType = {
    trackColorFalse: 'red',
    trackColorTrue: 'green',
    thumbColorFalse: 'white',
    thumbColorTrue: 'white',
    value: false,
  };
  const RenderedComponent = renderer.create(getComponent(props)).toJSON();
  expect(RenderedComponent).toMatchSnapshot();
});
