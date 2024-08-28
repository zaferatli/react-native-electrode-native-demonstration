import {Text, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ActionContainerDefaultProps} from './actionContainer.default';
import {ActionContainerStyle} from './actionContainer.style';
import {ActionContainerPropsType} from './actionContainer.type';
import Button from 'components/atoms/button';
import {widthPixel} from 'helper/sizeHelper';
import IconWithText from 'components/molecules/iconWithText';
import {projectColors} from 'helper/stylesHelper';

export const ActionContainer: FunctionComponent<
  ActionContainerPropsType
> = inProps => {
  const props = inProps as ActionContainerDefaultProps;
  return (
    <View style={[ActionContainerStyle.container, props.style]}>
      <Button text={props.buttonTitle} style={{width: widthPixel(361)}} />
      <IconWithText
        icon={props.icon}
        iconHeight={widthPixel(16)}
        iconWidth={widthPixel(16)}
        text={props.cancelText}
        textColor={projectColors.grey}
      />
    </View>
  );
};
