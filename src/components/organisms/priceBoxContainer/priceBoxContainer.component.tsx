import {View} from 'react-native';
import React, {FunctionComponent, useState} from 'react';
import {PriceBoxContainerDefaultProps} from './priceBoxContainer.default';
import {PriceBoxContainerStyle} from './priceBoxContainer.style';
import {PriceBoxContainerPropsType} from './priceBoxContainer.type';
import {PriceBox} from '../priceBox/priceBox.component';
export const PriceBoxContainer: FunctionComponent<
  PriceBoxContainerPropsType
> = inProps => {
  const [selectedPrice, setPrice] = useState('');
  const props = inProps as PriceBoxContainerDefaultProps;
  return (
    <View style={[PriceBoxContainerStyle.container, props.style]}>
      {props.priceBoxes.map(priceBox => (
        <PriceBox
          key={priceBox.title}
          value={selectedPrice === priceBox.title ? true : false}
          title={priceBox.title}
          price={priceBox.price}
          boldPrice={priceBox.boldPrice}
          saving={priceBox.saving}
          onChange={value => setPrice(value)}
        />
      ))}
    </View>
  );
};
