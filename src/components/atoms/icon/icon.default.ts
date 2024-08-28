import {IconPropsType} from './icon.type';

export type IconDefaultPropsType = IconPropsType &
  Required<Pick<IconPropsType, keyof typeof iconDefaultProps>>;

export const iconDefaultProps: IconPropsType = {
  iconType: 'BrowserIcon',
};
