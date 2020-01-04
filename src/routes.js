import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Image } from 'react-native';

import logo from '~/assets/logo-header.png';

import colors from '~/styles/colors';

import SignIn from '~/pages/SignIn';

import Checkin from '~/pages/Checkin';
import HelpOrder from '~/pages/HelpOrder';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({ SignIn }),
        App: createStackNavigator(
          {
            App: createBottomTabNavigator(
              {
                Checkin,
                HelpOrder,
              },
              {
                tabBarOptions: {
                  keyboardHidesTabBar: true,
                  activeTintColor: colors.primary,
                },
              }
            ),
          },
          {
            defaultNavigationOptions: {
              headerTitle: <Image source={logo} />,
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
