import {heightPixel, widthPixel} from 'helper/sizeHelper';
import {projectColors, flexBox} from 'helper/stylesHelper';
import {StyleSheet} from 'react-native';

export const headerStyle = StyleSheet.create({
  container: {
    backgroundColor: projectColors.red,
    height: heightPixel(160),
    width: '100%',
    paddingTop: heightPixel(60),
    paddingHorizontal: widthPixel(20),
  },
  closeButtonStyle: {
    ...flexBox('row', 'flex-end', 'flex-end'),
  },
});
