import {StyleProp, ViewStyle} from 'react-native';
import {PremiumBoxPropsType} from '../premiumBox/premiumBox.type';

export type PremiumBoxContainerPropsType = {
  premiumBoxes: PremiumBoxPropsType[];
  style?: StyleProp<ViewStyle>;
};
