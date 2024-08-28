import {Button} from './button.component';
import {ButtonDefaultPropsType, buttonDefaultProps} from './button.default';
import {buttonStyle} from './button.style';
import {ButtonPropsType} from './button.type';

Button.defaultProps = buttonDefaultProps;

export default Button;
export {
  type ButtonPropsType,
  type ButtonDefaultPropsType,
  buttonDefaultProps,
  buttonStyle,
};
