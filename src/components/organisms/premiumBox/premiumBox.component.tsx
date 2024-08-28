import {Text, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {PremiumBoxDefaultProps} from './premiumBox.default';
import {PremiumBoxStyle} from './premiumBox.style';
import {PremiumBoxPropsType} from './premiumBox.type';
import Icon from 'components/atoms/icon';
import {projectColors} from 'helper/stylesHelper';
import {widthPixel} from 'helper/sizeHelper';

export const PremiumBox: FunctionComponent<PremiumBoxPropsType> = inProps => {
  const props = inProps as PremiumBoxDefaultProps;
  return (
    <View style={[PremiumBoxStyle.container, props.style]}>
      <View style={PremiumBoxStyle.iconContainer}>
        <Icon
          iconType={props.icon}
          height={widthPixel(24)}
          width={widthPixel(24)}
          fill={projectColors.grey}
        />
      </View>
      <View style={PremiumBoxStyle.textContainer}>
        <Text style={PremiumBoxStyle.titleText}>{props.title}</Text>
        <Text style={PremiumBoxStyle.descriptionText}>{props.description}</Text>
      </View>
    </View>
  );
};
