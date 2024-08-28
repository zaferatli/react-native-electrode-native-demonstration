import {flexBox, projectColors, borderBox, textFont} from 'helper/stylesHelper';
import {heightPixel, widthPixel} from 'helper/sizeHelper';
import {StyleSheet} from 'react-native';

export const IconWithTextStyle = StyleSheet.create({
  container: {
    ...flexBox('row', 'flex-start', 'center'),
    marginVertical: heightPixel(15),
    marginHorizontal: heightPixel(5),
  },
  text: {
    ...textFont(14, projectColors.red, 'bold'),
    marginLeft: widthPixel(10),
  },
});
