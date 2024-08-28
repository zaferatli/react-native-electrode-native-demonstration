import * as AllIcons from 'assets/svg';
import React, {FunctionComponent} from 'react';

import {CheckboxDefaultPropsType} from './checkbox.default';
import {CheckboxPropsType} from './checkbox.type';
import {TouchableOpacity} from 'react-native';
import {CheckBoxStyle} from './checkbox.style';
import {projectColors} from 'helper/stylesHelper';
import Icon from 'atoms/icon';

export const Checkbox: FunctionComponent<CheckboxPropsType> = inProps => {
  const props = inProps as CheckboxDefaultPropsType;

  const handlePressCheckbox = () => {
    props.onCheckedChanged?.(!props.checked);
  };

  return (
    <TouchableOpacity
      onPress={handlePressCheckbox}
      disabled={props.disabled}
      style={[
        CheckBoxStyle.container,
        props.checked && CheckBoxStyle.checkedContainer,
        props.disabled && CheckBoxStyle.disabledContainer,
        props.style,
      ]}>
      {props.checked && (
        <Icon
          iconType={props.icon}
          fill={props.disabled ? projectColors.grey : projectColors.white}
          width={12}
          height={9}
        />
      )}
    </TouchableOpacity>
  );
};
