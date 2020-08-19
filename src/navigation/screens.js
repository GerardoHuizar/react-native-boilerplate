import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../containers/login/container";

const Stack = createStackNavigator();

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Login"
        component={Login}
        option={{
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
