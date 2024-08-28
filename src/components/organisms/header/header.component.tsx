import {View} from 'react-native';
import React, {FunctionComponent, PropsWithChildren} from 'react';
import {HeaderDefaultPropsType} from './header.default';
import {headerStyle} from './header.style';
import {HeaderPropsType} from './header.type';
import {projectColors} from 'helper/stylesHelper';
import Button from 'components/atoms/button';

export const Header: FunctionComponent<
  PropsWithChildren<HeaderPropsType>
> = inProps => {
  const props = inProps as PropsWithChildren<HeaderDefaultPropsType>;
  return (
    <View style={[headerStyle.container]}>
      <Button
        type="icon"
        iconType="CloseIcon"
        iconFill={projectColors.white}
        style={headerStyle.closeButtonStyle}
        onPress={props.onPressCloseButton}
      />
      <Button
        type="icon"
        iconType="YoutubeIcon"
        iconFill={projectColors.white}
      />
    </View>
  );
};
