import * as AllIcons from 'assets/svg';
import {StyleProp, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';

export type CheckboxPropsType = {
  checked?: boolean;
  style?: StyleProp<ViewStyle>;
  onCheckedChanged?: (value: boolean) => void;
  icon?: keyof typeof AllIcons;
} & SvgProps;
