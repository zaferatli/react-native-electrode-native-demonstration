import {heightPixel, widthPixel} from 'helper/sizeHelper';
import {projectColors, flexBox, textFont} from 'helper/stylesHelper';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {ButtonPropsType} from './button.type';

export const buttonStyle = StyleSheet.create({
  primaryButton: {
    backgroundColor: projectColors.grey,
  },
});

export const createCustomButtonStyle = (props: ButtonPropsType): ViewStyle => {
  const containerStyle: ViewStyle = {
    height: props.type === 'primary' ? heightPixel(48) : undefined,
    backgroundColor:
      props.type === 'primary' ? projectColors.greyDark : undefined,
    borderRadius: props.type === 'primary' ? widthPixel(9) : undefined,
    ...flexBox('row', 'center', 'center'),
    ...textFont(16, projectColors.white, 'bold'),
  };

  if (props.type === 'link') {
    containerStyle.backgroundColor = undefined;
    containerStyle.borderWidth = undefined;
    containerStyle.borderColor = undefined;
    containerStyle.height = undefined;
    containerStyle.paddingHorizontal = undefined;
  }

  return containerStyle;
};

export const createCustomTextStyle = (props: ButtonPropsType): TextStyle => {
  let fontSize = 14;
  let textColor = projectColors.white;
  let fontWeight = 'bold' as 'regular' | 'medium' | 'bold';
  if (props.type === 'primary') {
    fontSize = 16;
    textColor = projectColors.white;
    fontWeight = 'bold';
  } else if (props.type === 'link') {
    fontSize = 12;
    textColor = projectColors.grey;
    fontWeight = 'regular';
  }

  return {
    ...textFont(fontSize, textColor, fontWeight),
  };
};
