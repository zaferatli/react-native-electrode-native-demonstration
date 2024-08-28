import {Text, TouchableOpacity, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {PriceBoxDefaultPropsType} from './priceBox.default';
import {PriceBoxStyle, getBorderStyle} from './priceBox.style';
import {PriceBoxPropsType} from './priceBox.type';
import Checkbox from 'components/atoms/checkbox';

export const PriceBox: FunctionComponent<PriceBoxPropsType> = inProps => {
  const props = inProps as PriceBoxDefaultPropsType;
  return (
    <TouchableOpacity
      onPress={() => props.onChange(props.title)}
      style={[
        PriceBoxStyle.container,
        getBorderStyle(props.value),
        props.style,
      ]}>
      <View>
        <Text style={PriceBoxStyle.headerText}>{props.title}</Text>
        <View style={PriceBoxStyle.offerContainer}>
          <Text style={PriceBoxStyle.offerFirstText}>{props.price}</Text>
          <Text style={PriceBoxStyle.offerSecondText}>{props.boldPrice}</Text>
        </View>
      </View>
      <Checkbox
        checked={props.value}
        icon="CheckIcon"
        onCheckedChanged={value => props.onChange(value ? props.title : '')}
      />
    </TouchableOpacity>
  );
};
