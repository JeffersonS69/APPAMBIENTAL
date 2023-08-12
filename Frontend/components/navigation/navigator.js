import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import Landing from "../screens/landing";
import Login from "../screens/login";
import Home from "../screens/home";
import { Context } from "../globalContext/globalContext.js";
import Register from "../screens/register";

const Stack = createStackNavigator();

function Navigator(props) {
  const globalContext = useContext(Context);
  const { isLoggedIn, userObj } = globalContext;

  return (
    <Stack.Navigator initialRouteName="Landing">
      {!isLoggedIn || !userObj ? 
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
       : 
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      }
    </Stack.Navigator>
  );
}

export default Navigator;
