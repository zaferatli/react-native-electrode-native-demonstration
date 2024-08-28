import {StyleProp, ViewStyle} from 'react-native';

export type PriceBoxPropsType = {
  title?: string;
  price?: string;
  boldPrice?: string;
  style?: StyleProp<ViewStyle>;
  saving?: string;
  value?: boolean;
  onChange?: (value: string) => void;
};
