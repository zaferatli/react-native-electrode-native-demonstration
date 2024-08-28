import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {FunctionComponent, PropsWithChildren} from 'react';
import {MainLayoutDefaultPropsType} from './mainLayout.default';
import {mainPageLayoutStyle} from './mainLayout.style';
import {MainLayoutPropsType} from './mainLayout.type';

export const MainLayout: FunctionComponent<
  PropsWithChildren<MainLayoutPropsType>
> = inProps => {
  const props = inProps as PropsWithChildren<MainLayoutDefaultPropsType>;
  return (
    <View style={[mainPageLayoutStyle.container, props.containerStyle]}>
      {props.children}
    </View>
  );
};
