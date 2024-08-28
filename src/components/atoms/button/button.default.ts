import {projectColors} from 'helper/stylesHelper';
import {ButtonPropsType} from './button.type';

export type ButtonDefaultPropsType = ButtonPropsType &
  Required<Pick<ButtonPropsType, keyof typeof buttonDefaultProps>>;

export const buttonDefaultProps: ButtonPropsType = {
  type: 'primary',
  iconFill: projectColors.white,
};
