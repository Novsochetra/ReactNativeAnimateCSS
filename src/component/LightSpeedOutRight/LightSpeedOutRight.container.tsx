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
import { EasingPreset } from '@core/animation/EasingPreset';
import {
  Constant,
  ILightSpeedOutRightContainerProps,
  LightSpeedOutRightPresentation,
} from '.';

export const LightSpeedOutRight: React.FC<ILightSpeedOutRightContainerProps> =
  ({
    children,
    delayInMS = Constant.DEFAULT_DELAY_IN_MS,
    durationInMS = Constant.DEFAULT_DURATION_IN_MS,
    startPositionX = Constant.INITIAL_TRANSLATE_X,
    preset = 'EASE_OUT_SINE',
  }) => {
    const translateX = useSharedValue(startPositionX);

    const animatedStyle = useAnimatedStyle(
      (): Reanimated.AnimatedStyleProp<ViewStyle> => {
        const skewX = interpolate(
          translateX.value,
          [Constant.INITIAL_TRANSLATE_X, Constant.FINAL_TRANSLATE_X],
          [Constant.MAX_SKEW_X, Constant.MIN_SKEW_X],
        );

        const opacity = interpolate(
          translateX.value,
          [Constant.INITIAL_TRANSLATE_X, Constant.FINAL_TRANSLATE_X],
          [Constant.MAX_OPACITY, Constant.MIN_OPACITY],
        );

        return {
          opacity,
          transform: [
            {
              translateX: translateX.value,
            },
            { skewX: `${skewX}rad` },
          ],
        };
      },
    );

    useEffect(() => {
      translateX.value = withDelay(
        delayInMS,
        withTiming(Constant.FINAL_TRANSLATE_X, {
          duration: durationInMS,
          easing: EasingPreset[preset],
        }),
      );
    }, []);

    return (
      <LightSpeedOutRightPresentation containerStyle={animatedStyle}>
        {children}
      </LightSpeedOutRightPresentation>
    );
  };
