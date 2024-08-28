import {PriceBoxPropsType} from './priceBox.type';

export type PriceBoxDefaultPropsType = PriceBoxPropsType &
  Required<Pick<PriceBoxPropsType, keyof typeof priceBoxDefaultProps>>;

export const priceBoxDefaultProps: PriceBoxPropsType = {
  value: false,
};
