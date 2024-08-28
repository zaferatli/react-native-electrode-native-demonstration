import {Text, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {PremiumBoxContainerDefaultProps} from './premiumBoxContainer.default';
import {PremiumBoxContainerStyle} from './premiumBoxContainer.style';
import {PremiumBoxContainerPropsType} from './premiumBoxContainer.type';
import {PremiumBox} from '../premiumBox/premiumBox.component';
import {IconWithText} from 'components/molecules/iconWithText/iconWithText.component';
import {projectColors} from 'helper/stylesHelper';
import {widthPixel} from 'helper/sizeHelper';

export const PremiumBoxContainer: FunctionComponent<
  PremiumBoxContainerPropsType
> = inProps => {
  const props = inProps as PremiumBoxContainerDefaultProps;
  return (
    <View style={[PremiumBoxContainerStyle.container, props.style]}>
      <IconWithText
        icon="YoutubeIconRed"
        text="YouTube Premium"
        iconHeight={widthPixel(17)}
        iconWidth={widthPixel(17)}
      />
      {props.premiumBoxes.map(premiumBox => (
        <PremiumBox
          key={premiumBox.title}
          icon={premiumBox.icon}
          title={premiumBox.title}
          description={premiumBox.description}
        />
      ))}
    </View>
  );
};
