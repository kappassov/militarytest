import React from "react";
import { createAppContainer, CreateSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, Text, Button } from "react-native";

import ScreenA from "./Screens/ScreenA";
import ScreenB from "./Screens/ScreenB";
import ScreenC from "./Screens/ScreenC";

import BottomTabA from "./Screens/ScreenBottomA";
import BottomTabB from "./Screens/ScreenBottomB";
import BottomTabC from "./Screens/ScreenBottomC";
import BottomTabD from "./Screens/ScreenBottomD";
import BottomTabE from "./Screens/ScreenBottomE";
import { TextInputComponent } from "react-native";

const tabNavigator = createBottomTabNavigator(
  {
    Новости: createStackNavigator({
      Новости: BottomTabA,
      ScreenA: ScreenA,
    }),
    Фото: createStackNavigator({
      Фото: BottomTabB,
    }),
    Главная: createStackNavigator({
      Главная: BottomTabC,
    }),
    Видео: createStackNavigator({
      Видео: BottomTabD,
    }),
    Тест: createStackNavigator({
      Тест: BottomTabE,
      ScreenB: ScreenB,
    }),
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "TabA") {
          iconName = focused
            ? "ios-information-circle"
            : "ios-information-circle-outline";
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),

    tabBarOptions: {
      activeTintColor: "#0F3834",
      activeBackgroundColor: "#0F3834",
      keyboardHidesTabBar: false,
      tabStyle: {
        backgroundColor: "white",
      },
      labelStyle: {
        fontSize: 10,
      },
    },
  }
);

const stackNavigator = createStackNavigator(
  {
    ScreenA: ScreenA,
    ScreenB: ScreenB,
  },
  {
    initialRouteName: "ScreenA",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#0F3834",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: "bold",
      },
    },
  }
);
// const RootStack = createStackNavigator(
//   {
//     Main: {
//       screen: stackNavigator,
//     },
//     MyModal: {
//       screen: ScreenC,
//     },
//   },
//   {
//     mode: "modal",
//     headerMode: "none",
//   }
// );

const App = createAppContainer(tabNavigator);
export default App;
