import {IconWithTextPropsType} from './iconWithText.type';

export type IconWithTextDefaultProps = IconWithTextPropsType &
  Required<Pick<IconWithTextPropsType, keyof typeof iconWithTextDefaultProps>>;

export const iconWithTextDefaultProps: IconWithTextPropsType = {
  icon: 'YoutubeLogo',
  text: 'YouTube Premium',
};
