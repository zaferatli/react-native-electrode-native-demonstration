import * as AllIcons from 'assets/svg';
import {StyleProp, ViewStyle} from 'react-native';

export type PremiumBoxPropsType = {
  icon: keyof typeof AllIcons;
  title: string;
  description: string;
  style?: StyleProp<ViewStyle>;
};
