import * as AllIcons from 'assets/svg';
import React, {FunctionComponent} from 'react';

import {IconDefaultPropsType} from './icon.default';
import {IconPropsType} from './icon.type';

export const Icon: FunctionComponent<IconPropsType> = inProps => {
  const props = inProps as IconDefaultPropsType;
  const RenderIcon = AllIcons[props.iconType];

  return <RenderIcon {...props} />;
};
