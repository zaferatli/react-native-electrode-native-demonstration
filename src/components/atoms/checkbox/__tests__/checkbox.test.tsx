import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';

import Checkbox, {CheckboxPropsType} from '../index';
import {Linking} from 'react-native';

const getComponent = (props: CheckboxPropsType) => {
  return <Checkbox {...props} />;
};

it('initial render button', () => {
  renderer.create(getComponent({}));
});

it('Primary Checkbox', () => {
  const props: CheckboxPropsType = {
    icon: 'CheckIcon',
    checked: false,
  };
  const RenderedComponent = renderer.create(getComponent(props)).toJSON();
  expect(RenderedComponent).toMatchSnapshot();
});

it('Checkbox True', () => {
  const props: CheckboxPropsType = {
    icon: 'CheckIcon',
    checked: true,
  };
  const RenderedComponent = renderer.create(getComponent(props)).toJSON();
  expect(RenderedComponent).toMatchSnapshot();
});

it('Checkbox With Style', () => {
  const props: CheckboxPropsType = {
    icon: 'CheckIcon',
    checked: false,
    style: {backgroundColor: 'white'},
  };
  const RenderedComponent = renderer.create(getComponent(props)).toJSON();
  expect(RenderedComponent).toMatchSnapshot();
});
