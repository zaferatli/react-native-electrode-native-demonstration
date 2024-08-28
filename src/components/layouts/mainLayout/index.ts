import {MainLayout} from './mainLayout.component';
import {
  MainLayoutDefaultPropsType,
  mainLayoutDefaultProps,
} from './mainLayout.default';
import {mainPageLayoutStyle} from './mainLayout.style';
import {MainLayoutPropsType} from './mainLayout.type';

MainLayout.defaultProps = mainLayoutDefaultProps;

export default MainLayout;
export {
  type MainLayoutPropsType,
  type MainLayoutDefaultPropsType,
  mainLayoutDefaultProps,
  mainPageLayoutStyle,
};
