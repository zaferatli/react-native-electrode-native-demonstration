import {Checkbox} from './checkbox.component';
import {
  CheckboxDefaultPropsType,
  checkboxDefaultProps,
} from './checkbox.default';
import {CheckBoxStyle} from './checkbox.style';
import {CheckboxPropsType} from './checkbox.type';

Checkbox.defaultProps = checkboxDefaultProps;

export default Checkbox;
export {
  type CheckboxPropsType,
  type CheckboxDefaultPropsType,
  checkboxDefaultProps,
  CheckBoxStyle,
};
