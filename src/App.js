/* Needed for redux-saga es6 generator support */
import "@babel/polyfill";
import "./polyfills";
import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { enableScreens } from "react-native-screens";
import { UIManager, Platform, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import store from "./configure-store";
import fonts from "./assets/fonts/index";
import { translationMessages } from "./i18n";

import Screens from "./navigation/screens";
import LanguageProvider from "./containers/Language-provider/container";

/* Enable LayoutAnimation on Android */
Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default function App() {
  const [loaded] = useFonts(fonts);

  if (!loaded) return <Text>Error</Text>;

  enableScreens();

  return (
    <Provider store={store}>
      <LanguageProvider messages={translationMessages}>
        <NavigationContainer>
          <Screens />
        </NavigationContainer>
      </LanguageProvider>
    </Provider>
  );
}
