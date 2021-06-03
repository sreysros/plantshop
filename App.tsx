import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './app/screen/HomeScreen';
import FavoruiteScreen from './app/screen/Favourite';
import ScanScreen from './app/screen/Scan';
import CartScreen from './app/screen/CartScreen';
import ProfileScreen from './app/screen/ProfileScreen';
import DeviceInfo from 'react-native-device-info';
import {Images} from './app/tool';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();
const tabNavigatorOption = () => {
  const tabBarOptions = {
    style: {
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      height: DeviceInfo.hasNotch() ? 80 : 60,
      backgroundColor: '#fff',
      borderTopWidth: 0,
      shadowColor: "#161245",
      shadowOffset: {
        width: 0,
        height: -4,
      },
      shadowOpacity: 0.10,
      shadowRadius: 4,

      elevation: 5,
      paddingTop: DeviceInfo.hasNotch() ? 25 : 10,
      position: 'absolute',
    },
  };
  return tabBarOptions;
};

const MainNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={tabNavigatorOption()}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => <Image source={Images.home} />,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoruiteScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => <Image source={Images.favourite} />,
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => <Image source={Images.scan} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => <Image source={Images.bag} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => <Image source={Images.profile} />,
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
