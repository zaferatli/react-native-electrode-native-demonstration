import {Text, View} from 'react-native';
import React, {FunctionComponent, useState} from 'react';
import {FreeTrailDefaultPropsType} from './freeTrail.default';
import {FreeTrailStyle, getBorderStyle} from './freeTrail.style';
import {FreeTrailPropsType} from './freeTrail.type';
import Switch from 'components/molecules/switch';

export const FreeTrail: FunctionComponent<FreeTrailPropsType> = inProps => {
  const [switchValue, setSwitchValue] = useState(false);
  const props = inProps as FreeTrailDefaultPropsType;
  return (
    <View
      style={[
        FreeTrailStyle.container,
        getBorderStyle(switchValue),
        props.style,
      ]}>
      <View>
        <Text style={FreeTrailStyle.headerText}>{props.headerText}</Text>
        <Text style={FreeTrailStyle.descriptionText}>
          {props.descriptionText}
        </Text>
      </View>
      <Switch
        trackColorFalse="red"
        trackColorTrue="green"
        thumbColorFalse="white"
        thumbColorTrue="white"
        value={switchValue}
        onValueChange={value => setSwitchValue(value)}
      />
    </View>
  );
};
