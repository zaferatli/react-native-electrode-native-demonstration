import {StyleProp, ViewStyle} from 'react-native';

export type FooterLinksPropsType = {
  data: FooterLinkPropsType[];
  style?: StyleProp<ViewStyle>;
};

export type FooterLinkPropsType = {
  title?: string;
  url?: string;
};
