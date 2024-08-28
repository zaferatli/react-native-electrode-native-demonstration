import {Header} from './header.component';
import {HeaderDefaultPropsType, headerDefaultProps} from './header.default';
import {headerStyle} from './header.style';
import {HeaderPropsType} from './header.type';

Header.defaultProps = headerDefaultProps;

export default Header;
export {
  type HeaderPropsType,
  type HeaderDefaultPropsType,
  headerDefaultProps,
  headerStyle,
};
