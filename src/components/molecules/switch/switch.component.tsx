import React, {FunctionComponent, useEffect, useRef} from 'react';
import {Animated, TouchableOpacity} from 'react-native';

import {SwitchDefaultPropsType} from './switch.default';
import {getThumbStyle, getTrackStyle} from './switch.style';
import {SwitchPropsType} from './switch.type';

export const Switch: FunctionComponent<SwitchPropsType> = inProps => {
  const props = inProps as SwitchDefaultPropsType;
  const animationRef = useRef<Animated.Value>(new Animated.Value(0)).current;

  const leftInterpolate = animationRef.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 23],
  });

  const trackColorInterpolate = animationRef.interpolate({
    inputRange: [0, 1],
    outputRange: [
      props.trackColorFalse as string,
      props.trackColorTrue as string,
    ],
  });

  const thumbColorInterpolate = animationRef.interpolate({
    inputRange: [0, 1],
    outputRange: [
      props.thumbColorFalse as string,
      props.thumbColorTrue as string,
    ],
  });

  useEffect(() => {
    Animated.timing(animationRef, {
      toValue: props.value ? 1 : 0,
      useNativeDriver: false,
    }).start();
  }, [props.value]);

  const handlePressSwitch = () => {
    props.onValueChange?.(!props.value);
  };

  return (
    <Animated.View
      style={[getTrackStyle(props, trackColorInterpolate), props.style]}>
      <TouchableOpacity disabled={props.disabled} onPress={handlePressSwitch}>
        <Animated.View
          style={[getThumbStyle(props, thumbColorInterpolate, leftInterpolate)]}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};
