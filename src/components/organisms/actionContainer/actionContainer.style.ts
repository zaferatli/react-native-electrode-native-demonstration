import {flexBox, projectColors, borderBox, textFont} from 'helper/stylesHelper';
import {heightPixel, widthPixel} from 'helper/sizeHelper';
import {StyleSheet} from 'react-native';

export const ActionContainerStyle = StyleSheet.create({
  container: {
    ...flexBox('column', 'center', 'center'),
    alignSelf: 'center',
    marginTop: widthPixel(10),
  },
});
