import * as AllIcons from 'assets/svg';
import {SvgProps} from 'react-native-svg';

export type IconPropsType = {
  iconType?: keyof typeof AllIcons;
} & SvgProps;
