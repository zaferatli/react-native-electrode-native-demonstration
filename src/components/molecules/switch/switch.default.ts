import {SwitchPropsType} from './switch.type';

export type SwitchDefaultPropsType = SwitchPropsType &
  Required<Pick<SwitchPropsType, keyof typeof switchDefaultProps>>;

export const switchDefaultProps: SwitchPropsType = {};
