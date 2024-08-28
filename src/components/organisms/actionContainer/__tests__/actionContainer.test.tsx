import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';

import ActionContainer, {ActionContainerPropsType} from '../index';

const getComponent = (props: ActionContainerPropsType) => {
  return <ActionContainer {...props} />;
};

it('initial render button', () => {
  renderer.create(getComponent({}));
});

it('Primary ActionContainer', () => {
  const props: ActionContainerPropsType = {
    buttonTitle: '7 Day Trial and Plan',
    cancelText: 'NO PAYMENT NOW',
    icon: 'ShieldIcon',
  };
  const RenderedComponent = renderer.create(getComponent(props)).toJSON();
  expect(RenderedComponent).toMatchSnapshot();
});
