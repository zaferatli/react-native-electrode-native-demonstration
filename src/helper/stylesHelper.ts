import {ColorValue, FlexAlignType, FlexStyle, ViewStyle} from 'react-native';
import {fontPixel, widthPixel} from './sizeHelper';

const projectColors = {
  greyDark: '#333333FF' as ColorValue,
  grey: '#717578FF' as ColorValue,
  green: '#21D840FF' as ColorValue,
  white: '#FFFFFF' as ColorValue,
  whiteLight: '#E7E8E9FF' as ColorValue,
  white600: '#E7EAF4FF' as ColorValue,
  white800: '#FFF5F5FF' as ColorValue,
  black: '#000000FF' as ColorValue,
  blackText: '#17171CFF' as ColorValue,
  red: '#FF0000' as ColorValue,
  transparent: '#FFFFFF00' as ColorValue,
};

const textFont = (
  fontSize: number | undefined = undefined,
  fontColor: ColorValue | undefined = projectColors.black,
  fontWeight: 'regular' | 'medium' | 'bold' = 'regular',
  fontStyle: 'normal' | 'italic' = 'normal',
  lineHeight: number | undefined = undefined,
): object => {
  const turnItem: {
    fontSize: number;
    color?: ColorValue | undefined;
    fontStyle?: string | undefined;
    lineHeight?: number | undefined;
    fontWeight?: string;
  } = {
    color: fontColor,
    fontStyle: fontStyle,
    fontSize: fontPixel(fontSize ? fontSize : 14),
    lineHeight: lineHeight ? fontPixel(lineHeight) : undefined,
  };

  switch (fontWeight) {
    case 'bold':
      turnItem.fontWeight = '600';
      break;
    case 'medium':
      turnItem.fontWeight = '500';
      break;
    case 'regular':
      turnItem.fontWeight = '400';
      break;
    default:
      turnItem.fontWeight = '400';
  }

  return turnItem;
};

const flexBox = (
  flexDirection:
    | 'row'
    | 'column'
    | 'row-reverse'
    | 'column-reverse'
    | undefined = undefined,
  justifyContent:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined = undefined,
  alignItems: FlexAlignType | undefined = undefined,
  flexWrap: 'wrap' | 'nowrap' | 'wrap-reverse' | undefined = undefined,
): FlexStyle => {
  return {
    display: 'flex',
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
  };
};

const borderBox = (
  borderColor = projectColors.grey,
  borderRadius = 0,
  borderWidth = 1,
): ViewStyle => {
  return {
    borderWidth: widthPixel(borderWidth),
    borderColor,
    borderRadius: widthPixel(borderRadius),
  };
};

export {projectColors, flexBox, textFont, borderBox};
