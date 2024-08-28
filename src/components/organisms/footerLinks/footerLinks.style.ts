import {flexBox, projectColors, borderBox, textFont} from 'helper/stylesHelper';
import {heightPixel, widthPixel} from 'helper/sizeHelper';
import {StyleSheet} from 'react-native';

export const FooterLinksStyle = StyleSheet.create({
  container: {
    ...flexBox('row', 'space-around', 'center'),
    paddingHorizontal: widthPixel(30),
    marginTop: widthPixel(10),
  },
  dashText: {
    ...textFont(12, projectColors.grey, 'regular'),
  },
});
