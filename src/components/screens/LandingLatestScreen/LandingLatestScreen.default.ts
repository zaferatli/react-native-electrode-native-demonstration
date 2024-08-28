import {LandingLatestScreenPropsType} from './LandingLatestScreen.type';

export type LandingLatestScreenDefaultProps = LandingLatestScreenPropsType &
  Required<
    Pick<
      LandingLatestScreenPropsType,
      keyof typeof landingLatestScreenDefaultProps
    >
  >;

export const landingLatestScreenDefaultProps: LandingLatestScreenPropsType = {};
