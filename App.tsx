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
import {Alert, Button, Image, Platform, Text, View} from 'react-native';
import BottomNavigator from './app/screen/component/tabBarBottom';
import { createStackNavigator, HeaderStyleInterpolators, StackNavigationOptions } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const tabNavigatorOption = () => {
  const tabBarOptions = {
    style: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
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

const CustomIcon = () => {
  return (
<View style={{
    position: 'absolute', top: -60,
    width: 60, height: 60, borderRadius: 30, backgroundColor: '#44ACA0', justifyContent: 'center', shadowColor: "#1F244B",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4, elevation: 5,
  }}>
    <Image style={{ alignSelf: 'center' }} source={Images.scan} />
  </View>
  )
}

const TabStack = () => {
  return (
    <Tab.Navigator tabBarOptions={tabNavigatorOption()}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => <Image source={Images.home}/>,
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
          tabBarIcon: ({ focused }) => <CustomIcon /> ,
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
const screenHeaderOption = () => {
  const screenOption: StackNavigationOptions = {
    headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
    headerBackTitleVisible: false,
    headerStyle: {
      backgroundColor: 'red',
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0,
      height: DeviceInfo.hasNotch() ? 110 : 90,
    },
    headerLeftContainerStyle: {
      paddingLeft: Platform.OS === 'ios' ? 10 : 0,
    },
    headerTintColor: '#0E1446',
    headerTitleStyle: {
      color: '#0E1446',
    },
    headerTitleAllowFontScaling: false,
    headerBackTitle: ' ',
    cardStyle: { backgroundColor: 'transparent' },
    headerShown: false,
    cardOverlayEnabled: true,
    
  };

  return screenOption;
};

const HeaderLeft = () => {
  return (
    <View>
      <Text>Hi, Sreysros</Text>
    </View>
  )
}

const HeaderRight = () => {
  return (
    <View>
      <Image source={Images.notification} />
    </View>
  )
}

const Stack = createStackNavigator();
const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'HomeScreen'}
      // screenOptions={screenHeaderOption()} 
      screenOptions={{headerStyle:{backgroundColor: '#f7f7f7', borderBottomWidth: 0, borderColor: 'transparent'}, title: ''}}
      mode="modal"
      // headerMode="none"
      >
      <Stack.Screen
        name={'HomeScreen'}
        component={TabStack}
      />
      </Stack.Navigator>
  )
}



const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
   </NavigationContainer>
  );
};

export default App;
