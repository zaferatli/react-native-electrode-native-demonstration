import {CheckboxPropsType} from './checkbox.type';

export type CheckboxDefaultPropsType = CheckboxPropsType &
  Required<Pick<CheckboxPropsType, keyof typeof checkboxDefaultProps>>;

export const checkboxDefaultProps: CheckboxPropsType = {};
