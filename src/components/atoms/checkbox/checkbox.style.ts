import {flexBox, projectColors} from 'helper/stylesHelper';
import {widthPixel} from 'helper/sizeHelper';
import {StyleSheet} from 'react-native';

export const CheckBoxStyle = StyleSheet.create({
  container: {
    borderWidth: widthPixel(1),
    borderColor: projectColors.whiteLight,
    borderRadius: widthPixel(24),
    height: widthPixel(24),
    width: widthPixel(24),
    ...flexBox('column', 'center', 'center'),
  },
  checkedContainer: {
    backgroundColor: projectColors.red,
    borderColor: projectColors.red,
  },
  disabledContainer: {
    borderColor: projectColors.whiteLight,
    backgroundColor: projectColors.white,
  },
  hasErrorContainer: {
    borderColor: projectColors.red,
  },
});
