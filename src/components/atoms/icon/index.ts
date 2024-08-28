import {Icon} from './icon.component';
import {IconDefaultPropsType, iconDefaultProps} from './icon.default';
import {iconStyle} from './icon.style';
import {IconPropsType} from './icon.type';

Icon.defaultProps = iconDefaultProps;

export default Icon;
export {
  type IconPropsType,
  type IconDefaultPropsType,
  iconDefaultProps,
  iconStyle,
};
