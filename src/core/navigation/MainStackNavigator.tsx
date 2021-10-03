import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { IMainStackNavigatorParams } from './MainStackNavigator.interface';
import { defaultNavigationStack } from './navigationConfig';
import { HomeScreen } from '@screen/home/HomeScreen';

const Stack = createStackNavigator<IMainStackNavigatorParams>();

export const MainStackNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => {
        return {
          ...defaultNavigationStack,
          detachPreviousScreen: !navigation.isFocused(),
        };
      }}
      initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'React Native Animated CSS ☺️' }}
      />
      <Stack.Screen
        name="FadeIn"
        component={HomeScreen}
        options={{ title: 'Fade In' }}
      />
    </Stack.Navigator>
  );
};
