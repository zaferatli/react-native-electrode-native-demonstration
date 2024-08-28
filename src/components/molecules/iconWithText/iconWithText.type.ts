import * as AllIcons from 'assets/svg';
import {ColorValue, StyleProp, TextStyle, ViewStyle} from 'react-native';

export type IconWithTextPropsType = {
  style?: StyleProp<ViewStyle>;

  text: string;
  textColor?: ColorValue;
  textStyle?: StyleProp<TextStyle>;

  icon: keyof typeof AllIcons;
  iconHeight?: number;
  iconWidth?: number;
};
