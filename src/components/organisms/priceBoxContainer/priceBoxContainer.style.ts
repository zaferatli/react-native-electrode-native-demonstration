import {flexBox, projectColors, borderBox, textFont} from 'helper/stylesHelper';
import {heightPixel, widthPixel} from 'helper/sizeHelper';
import {StyleSheet} from 'react-native';

export const PriceBoxContainerStyle = StyleSheet.create({
  container: {
    ...flexBox('column', 'center', 'flex-start'),
    alignSelf: 'center',
  },
});
