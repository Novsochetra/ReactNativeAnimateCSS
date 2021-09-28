import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IFlashContainerProps {
  delayInMS?: number;
  durationInMS?: number;
}

export interface IFlashPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
