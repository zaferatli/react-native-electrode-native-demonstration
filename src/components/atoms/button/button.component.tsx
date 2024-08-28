import {Text, TouchableOpacity, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ButtonPropsType} from './button.type';
import {ButtonDefaultPropsType} from './button.default';
import {
  buttonStyle,
  createCustomButtonStyle,
  createCustomTextStyle,
} from './button.style';
import Icon from 'atoms/icon';

export const Button: FunctionComponent<ButtonPropsType> = inProps => {
  const props = inProps as ButtonDefaultPropsType;

  const renderIcon = (
    <Icon fill={props.iconFill} iconType={props.iconType ?? 'CloseIcon'} />
  );

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        buttonStyle.primaryButton,
        createCustomButtonStyle(props),
        props.style,
      ]}>
      {props.type === 'icon' ? (
        renderIcon
      ) : (
        <Text style={[createCustomTextStyle(props)]}>{props.text}</Text>
      )}
    </TouchableOpacity>
  );
};
