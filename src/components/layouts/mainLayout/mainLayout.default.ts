import {MainLayoutPropsType} from './mainLayout.type';

export type MainLayoutDefaultPropsType = MainLayoutPropsType &
  Required<Pick<MainLayoutPropsType, keyof typeof mainLayoutDefaultProps>>;

export const mainLayoutDefaultProps: MainLayoutPropsType = {
  //
};
