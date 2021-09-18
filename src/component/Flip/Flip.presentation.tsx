import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IFlipPresentationProps } from './';

export const FlipPresentation: React.FC<IFlipPresentationProps> = (props) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
