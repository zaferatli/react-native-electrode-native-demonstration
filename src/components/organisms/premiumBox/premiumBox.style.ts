import {flexBox, projectColors, borderBox, textFont} from 'helper/stylesHelper';
import {heightPixel, widthPixel} from 'helper/sizeHelper';
import {StyleSheet} from 'react-native';

export const PremiumBoxStyle = StyleSheet.create({
  container: {
    ...flexBox('row', 'center', 'center'),
    paddingVertical: heightPixel(20),
    borderBottomWidth: widthPixel(1),
    borderColor: projectColors.white600,
    borderRadius: widthPixel(10),
  },
  iconContainer: {
    ...borderBox(projectColors.whiteLight, 8, 1),
    height: heightPixel(40),
    width: heightPixel(40),
    ...flexBox('row', 'center', 'center'),
  },
  textContainer: {
    ...flexBox('column', 'flex-start', 'flex-start'),
    marginLeft: widthPixel(10),
    paddingRight: widthPixel(10),
  },
  titleText: {
    ...textFont(14, projectColors.greyDark, 'bold'),
  },
  descriptionText: {
    ...textFont(12, projectColors.grey, 'regular'),
    marginTop: heightPixel(5),
  },
});
