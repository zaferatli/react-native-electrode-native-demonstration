import {HeaderPropsType} from './header.type';

export type HeaderDefaultPropsType = HeaderPropsType &
  Required<Pick<HeaderPropsType, keyof typeof headerDefaultProps>>;

export const headerDefaultProps: HeaderPropsType = {
  closeIcon: 'CloseIcon',
};
