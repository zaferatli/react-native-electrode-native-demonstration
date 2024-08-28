import {Text, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {IconWithTextDefaultProps} from './iconWithText.default';
import {IconWithTextStyle} from './iconWithText.style';
import {IconWithTextPropsType} from './iconWithText.type';
import Icon from 'components/atoms/icon';

export const IconWithText: FunctionComponent<
  IconWithTextPropsType
> = inProps => {
  const props = inProps as IconWithTextDefaultProps;
  return (
    <View style={[IconWithTextStyle.container, props.style]}>
      <Icon
        iconType={props.icon}
        height={props.iconHeight}
        width={props.iconWidth}
      />
      <Text
        style={[
          IconWithTextStyle.text,
          {color: props.textColor},
          props.textStyle,
        ]}>
        {props.text}
      </Text>
    </View>
  );
};
