import {heightPixel, widthPixel} from 'helper/sizeHelper';
import {projectColors, flexBox, textFont, borderBox} from 'helper/stylesHelper';
import {StyleSheet} from 'react-native';

export const PriceBoxStyle = StyleSheet.create({
  container: {
    width: widthPixel(361),
    height: heightPixel(60),
    ...flexBox('row', 'space-between', 'center'),
    paddingHorizontal: widthPixel(20),
    alignSelf: 'center',
    borderRadius: widthPixel(8),
    backgroundColor: projectColors.white800,
    marginTop: heightPixel(15),
  },
  headerText: {
    ...textFont(12, projectColors.grey, 'medium'),
  },
  offerContainer: {
    ...flexBox('row', 'flex-start', 'center'),
  },
  offerFirstText: {
    ...textFont(12, projectColors.grey, 'regular'),
  },
  offerSecondText: {
    ...textFont(12, projectColors.blackText, 'medium'),
    marginLeft: widthPixel(5),
  },
});

export const getBorderStyle = (value: boolean) => {
  if (value) {
    return {
      ...borderBox(projectColors.red, 10, 2),
    };
  } else {
    return {
      ...borderBox(projectColors.whiteLight, 10, 1),
    };
  }
};
