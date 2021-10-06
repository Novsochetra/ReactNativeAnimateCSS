import React, { useEffect } from 'react';
import Reanimated from 'react-native-reanimated';
import { IFadeInUpPresentationProps, Constant } from './';

export const FadeInUpPresentation: React.FC<IFadeInUpPresentationProps> = (
  props,
) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
