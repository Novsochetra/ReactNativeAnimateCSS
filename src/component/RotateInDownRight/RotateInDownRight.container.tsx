/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { useComponentLayout } from '@core/hook';
import { EasingPreset } from '@core/animation/EasingPreset';
import {
  Constant,
  IRotateInDownRightContainerProps,
  RotateInDownRightPresentation,
} from '.';

export const RotateInDownRight: React.FC<IRotateInDownRightContainerProps> = ({
  children,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  preset = 'EASE_OUT_CIRC',
}) => {
  const [size, onLayout] = useComponentLayout();
  const rotateZ = useSharedValue(Constant.INITIAL_ROTATE_Z);

  const animatedStyle = useAnimatedStyle(
    (): Reanimated.AnimateStyle<ViewStyle> => {
      const opacity = interpolate(
        rotateZ.value,
        [
          Constant.FINAL_ROTATE_Z,
          Constant.INITIAL_ROTATE_Z / 2,
          Constant.INITIAL_ROTATE_Z,
        ],
        [Constant.MAX_OPACITY, Constant.MIN_OPACITY, Constant.MIN_OPACITY],
      );
      return {
        opacity,
        transform: [
          // TODO: refactor this to transform origin
          { translateX: size.width / 2 },
          { rotateZ: `${rotateZ.value}rad` },
          { translateX: -size.width / 2 },
        ],
      };
    },
  );

  useEffect(() => {
    if (size.width) {
      rotateZ.value = withDelay(
        delayInMS,
        withTiming(Constant.FINAL_ROTATE_Z, {
          duration: durationInMS,
          easing: EasingPreset[preset],
        }),
      );
    }
  }, [size.width]);

  return (
    <RotateInDownRightPresentation
      onLayout={onLayout}
      containerStyle={animatedStyle}>
      {children}
    </RotateInDownRightPresentation>
  );
};
