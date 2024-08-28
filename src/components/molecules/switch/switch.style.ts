import {flexBox, projectColors, borderBox, textFont} from 'helper/stylesHelper';
import {heightPixel, widthPixel} from 'helper/sizeHelper';
import {Animated, StyleSheet} from 'react-native';
import {SwitchPropsType} from './switch.type';

export const SwitchStyle = StyleSheet.create({
  container: {
    borderRadius: widthPixel(14),
    width: widthPixel(51),
    height: heightPixel(31),
    position: 'relative',
  },
  thumb: {
    height: heightPixel(27),
    width: widthPixel(27),
    borderRadius: widthPixel(14),
    position: 'absolute',
    top: 2,
  },
});

export const getTrackStyle = (
  props: SwitchPropsType,
  backgroundColor: Animated.AnimatedInterpolation<string>,
) => {
  const bgColor = props.disabled ? props.trackColorDisabled : backgroundColor;
  return {
    ...SwitchStyle.container,
    backgroundColor: bgColor,
  };
};

export const getThumbStyle = (
  props: SwitchPropsType,
  backgroundColor: Animated.AnimatedInterpolation<string>,
  leftPosition: Animated.AnimatedInterpolation<number>,
) => {
  const bgColor = props.disabled ? props.thumbColorDisabled : backgroundColor;
  return {
    ...SwitchStyle.thumb,
    left: leftPosition,
    backgroundColor: bgColor,
  };
};
