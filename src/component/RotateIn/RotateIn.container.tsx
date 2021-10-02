/* eslint-disable react-hooks/exhaustive-deps */
import { EasingPreset } from '@core/animation/EasingPreset';
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { Constant, IRotateInContainerProps, RotateInPresentation } from '.';

export const RotateIn: React.FC<IRotateInContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  preset = 'EASE_IN_SINE',
}) => {
  const rotateZ = useSharedValue(Constant.INITIAL_ROTATE_Z);

  const animatedStyle = useAnimatedStyle(
    (): Reanimated.AnimatedStyleProp<ViewStyle> => {
      const opacity = interpolate(
        rotateZ.value,
        [Constant.INITIAL_ROTATE_Z, Constant.FINAL_ROTATE_Z],
        [Constant.MIN_OPACITY, Constant.MAX_OPACITY],
      );

      return {
        opacity,
        transform: [
          {
            rotateZ: `${rotateZ.value}rad`,
          },
        ],
      };
    },
  );

  useEffect(() => {
    onRotateZ();
  }, []);

  const onRotateZ = () => {
    rotateZ.value = withDelay(
      delayInMS,
      withTiming(Constant.FINAL_ROTATE_Z, {
        duration: durationInMS,
        easing: EasingPreset[preset],
      }),
    );
  };

  return (
    <RotateInPresentation containerStyle={animatedStyle}>
      {children}
    </RotateInPresentation>
  );
};
