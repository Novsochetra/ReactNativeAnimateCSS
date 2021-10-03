import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { IListItemProps } from '@component/list-item/ListItem.interface';
import { assets } from '@core/asset';
import { useNavigation } from '@react-navigation/native';
import { IMainStackNavigatorParams } from '@core/navigation/MainStackNavigator.interface';
import { StackNavigationProp } from '@react-navigation/stack';

export const Menus: () => Array<IListItemProps> = () => {
  const navigation =
    useNavigation<StackNavigationProp<IMainStackNavigatorParams>>();

  return [
    {
      leftLabel: 'FadeIn',
      leftIcon: () => (
        <Image source={assets.icons.menu()} style={styles.icon} />
      ),
      rightIcon: () => (
        <Image source={assets.icons.chevronRight()} style={styles.icon} />
      ),
      paddingVertical: 16,
      mainAxisAlignment: 'space-between',
      onPress: () => navigation.navigate('FadeIn'),
    },
  ];
};

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 8,
  },
});
