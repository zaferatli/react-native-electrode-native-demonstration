import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';

import FreeTrail, {FreeTrailPropsType} from '../index';

const getComponent = (props: FreeTrailPropsType) => {
  return <FreeTrail {...props} />;
};

it('initial render button', () => {
  renderer.create(
    getComponent({
      value: true,
    }),
  );
});

it('Primary FreeTrail', () => {
  const props: FreeTrailPropsType = {
    value: false,
  };
  const RenderedComponent = renderer.create(getComponent(props)).toJSON();
  expect(RenderedComponent).toMatchSnapshot();
});
