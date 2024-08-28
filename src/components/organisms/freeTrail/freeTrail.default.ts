import {FreeTrailPropsType} from './freeTrail.type';

export type FreeTrailDefaultPropsType = FreeTrailPropsType &
  Required<Pick<FreeTrailPropsType, keyof typeof freeTrailDefaultProps>>;

export const freeTrailDefaultProps: FreeTrailPropsType = {
  value: false,
};
