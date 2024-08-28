import {heightPixel, widthPixel} from 'helper/sizeHelper';
import {projectColors, flexBox, textFont, borderBox} from 'helper/stylesHelper';
import {StyleSheet} from 'react-native';

export const FreeTrailStyle = StyleSheet.create({
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
  descriptionText: {
    ...textFont(14, projectColors.black, 'medium'),
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
