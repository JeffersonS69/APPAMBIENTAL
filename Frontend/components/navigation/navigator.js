import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { Context } from "../globalContext/globalContext.js";
import Register from "../screens/register";
import view from "../screens/view";
import warnings from "../screens/warnings";
import Recovery from "../screens/recovery";
import Preparing from "../screens/preparing";
import Home from "../screens/login/home";
import Login from "../screens/logout/login";
import Landing from "../screens/logout/landing.js";
import Tidings from "../screens/login/desastres/Tidings.js";
import PrincipalClim from "../screens/login/clima/principalClim.js";

const Stack = createStackNavigator();

function Navigator(props) {
  const globalContext = useContext(Context);
  const { isLoggedIn, userObj } = globalContext;

  return (
    <Stack.Navigator initialRouteName="Landing">
      {!isLoggedIn || !userObj ? (
        <>
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Recovery"
            component={Recovery}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tidings"
            component={Tidings}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Preparing"
            component={Preparing}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PrincipalClima"
            component={PrincipalClim}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default Navigator;
