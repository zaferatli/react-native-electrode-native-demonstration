import * as AllIcons from 'assets/svg';
import {ColorValue, StyleProp, ViewStyle} from 'react-native';

export type SwitchPropsType = {
  value?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  trackColorTrue?: ColorValue;
  trackColorFalse?: ColorValue;
  trackColorDisabled?: ColorValue;
  thumbColorTrue?: ColorValue;
  thumbColorFalse?: ColorValue;
  thumbColorDisabled?: ColorValue;
  onValueChange?: (value: boolean) => void;
};
