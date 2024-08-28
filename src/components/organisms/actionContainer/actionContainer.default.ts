import {ActionContainerPropsType} from './actionContainer.type';

export type ActionContainerDefaultProps = ActionContainerPropsType &
  Required<
    Pick<ActionContainerPropsType, keyof typeof actionContainerDefaultProps>
  >;

export const actionContainerDefaultProps: ActionContainerPropsType = {};
