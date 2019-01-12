import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Onboarding from '../app/onboarding/Onboarding';
import Home from '../app/home/Home';
import Tab1 from '../app/tab1/Tab1';
import Tab2 from '../app/tab2/Tab2';
import Tournaments from '../app/tournaments/Tournaments';
import Tab4 from '../app/tab4/Tab4';
import Tab5 from '../app/tab5/Tab5';

const Tab1Stack = createStackNavigator({
  Tab1: {
    screen: Tab1,
    navigationOptions: {
      // headerLeft: null,
      headerTitle: 'Tab1 Header'
    }
  }
});
const Tab2Stack = createStackNavigator({
  Tab2: {
    screen: Tab2,
    navigationOptions: {
      // headerLeft: null,
      headerTitle: 'Tab2 Header'
    }
  }
});
const TournamentsStack = createStackNavigator({
  Tournaments: {
    screen: Tournaments,
    navigationOptions: {
      // headerLeft: null,
      headerTitle: 'Tournaments Header'
    }
  }
});
const Tab4Stack = createStackNavigator({
  Tab4: {
    screen: Tab4,
    navigationOptions: {
      // headerLeft: null,
      headerTitle: 'Tab4 Header'
    }
  }
});
const Tab5Stack = createStackNavigator({
  Tab5: {
    screen: Tab5,
    navigationOptions: {
      // headerLeft: null,
      headerTitle: 'Tab5 Header'
    }
  }
});

const TabNavigator = createBottomTabNavigator(
  {
    Tab1: { screen: Tab1Stack },
    Tab2: { screen: Tab2Stack },
    Tournaments: {
      screen: TournamentsStack,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          let IconComponent = Ionicons;
          const tabIcon = !focused ? (
            <IconComponent name={'ios-gift'} size={50} color={'#2e2e2e'} />
          ) : (
            <IconComponent name={'ios-gift'} size={50} color={'red'} />
          );
          return tabIcon;
        }
      }
    },
    // Tournaments: Tournaments,
    Tab4: { screen: Tab4Stack },
    Tab5: { screen: Tab5Stack }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-construct${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Settings') {
          iconName = `ios-construct${focused ? '' : '-outline'}`;
        }
        iconName = 'ios-construct';

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={30} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      showLabel: Platform.OS !== 'android',
      activeTintColor: 'red',
      inactiveTintColor: '#2e2e2e'
    }
  }
);

const Navigation = createAppContainer(
  createSwitchNavigator(
    {
      // OnboardingPage: {
      //   screen: Onboarding
      //   // navigationOptions: {
      //   //   header: null
      //   // }
      // },
      HomePage: {
        screen: Home
      },
      TabNavigator
    },
    {
      // initialRouteName: 'OnboardingPage',
      initialRouteName: 'TabNavigator',
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  )
);

export default Navigation;
