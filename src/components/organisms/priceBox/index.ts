import {PriceBox} from './priceBox.component';
import {
  PriceBoxDefaultPropsType,
  priceBoxDefaultProps,
} from './priceBox.default';
import {PriceBoxStyle} from './priceBox.style';
import {PriceBoxPropsType} from './priceBox.type';

PriceBox.defaultProps = priceBoxDefaultProps;

export default PriceBox;
export {
  type PriceBoxPropsType,
  type PriceBoxDefaultPropsType,
  priceBoxDefaultProps,
  PriceBoxStyle,
};
