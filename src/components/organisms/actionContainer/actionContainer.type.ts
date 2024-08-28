import {StyleProp, ViewStyle} from 'react-native';
import * as AllIcons from 'assets/svg';

export type ActionContainerPropsType = {
  style?: StyleProp<ViewStyle>;
  title?: string;
  buttonTitle?: string;
  cancelText?: string;
  icon?: keyof typeof AllIcons;
};
