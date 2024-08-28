import {StyleProp, ViewStyle} from 'react-native';

export type FreeTrailPropsType = {
  headerText?: string;
  descriptionText?: string;
  style?: StyleProp<ViewStyle>;
  value: boolean;
  onChange?: (value: boolean) => void;
};
