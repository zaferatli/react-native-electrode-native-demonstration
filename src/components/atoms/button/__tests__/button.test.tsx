import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';

import Button, {ButtonPropsType} from '../index';
import {Linking} from 'react-native';

const getComponent = (props: ButtonPropsType) => {
  return <Button {...props} />;
};

it('initial render button', () => {
  renderer.create(getComponent({}));
});

it('Primary Button', () => {
  const props: ButtonPropsType = {
    text: '7 Day Trial and Plan',
  };
  const RenderedComponent = renderer.create(getComponent(props)).toJSON();
  expect(RenderedComponent).toMatchSnapshot();
});

it('Link Button', () => {
  const props: ButtonPropsType = {
    text: 'Privacy Policy',
    onPress: () => Linking.openURL('https://google.com'),
  };
  const RenderedComponent = renderer.create(getComponent(props)).toJSON();
  expect(RenderedComponent).toMatchSnapshot();
});

it('Icon Button', () => {
  const props: ButtonPropsType = {
    type: 'icon',
    iconType: 'BrowserIcon',
    onPress: () => Linking.openURL('https://google.com'),
  };
  const RenderedComponent = renderer.create(getComponent(props)).toJSON();
  expect(RenderedComponent).toMatchSnapshot();
});

it('Icon Button Colored', () => {
  const props: ButtonPropsType = {
    type: 'icon',
    iconType: 'BrowserIcon',
    iconFill: 'red',
    onPress: () => Linking.openURL('https://google.com'),
  };
  const RenderedComponent = renderer.create(getComponent(props)).toJSON();
  expect(RenderedComponent).toMatchSnapshot();
});
