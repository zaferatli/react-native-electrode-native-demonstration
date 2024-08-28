import {flexBox, projectColors, borderBox, textFont} from 'helper/stylesHelper';
import {heightPixel, widthPixel} from 'helper/sizeHelper';
import {StyleSheet} from 'react-native';

export const LandingLatestScreenStyle = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    height: '100%',
    backgroundColor: 'white',
  },
  container: {
    width: widthPixel(361),
    alignSelf: 'center',
  },
  bottomView: {
    marginBottom: 24,
  },
});
