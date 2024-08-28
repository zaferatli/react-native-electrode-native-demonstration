import * as AllIcons from 'assets/svg';
import {ColorValue, StyleProp, ViewStyle} from 'react-native';

export type ButtonPropsType = {
  type?: 'link' | 'primary' | 'icon';
  onPress?: () => void;
  text?: string;
  iconType?: keyof typeof AllIcons;
  iconFill?: ColorValue;
  style?: StyleProp<ViewStyle>;
};
