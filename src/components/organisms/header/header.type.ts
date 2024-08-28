import * as AllIcons from 'assets/svg';

export type HeaderPropsType = {
  onPressCloseButton?: () => void;
  closeIcon?: keyof typeof AllIcons;
};
