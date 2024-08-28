import {StyleProp, ViewStyle} from 'react-native';
import {PriceBoxPropsType} from '../priceBox/priceBox.type';

export type PriceBoxContainerPropsType = {
  priceBoxes: PriceBoxPropsType[];
  style?: StyleProp<ViewStyle>;
};
