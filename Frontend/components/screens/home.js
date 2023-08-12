import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Context } from "../globalContext/globalContext.js";
import containers from "../styles/containers.js";
import fonts from "../styles/fonts.js";
import buttons from "../styles/buttons.js";


function Home({ navigation, route, props}) {
  const globalContext = useContext(Context);
  const { isLoggedIn, appSettings } = globalContext;

  return (
    <View style={containers(appSettings).outerPage}>
      <Text style={fonts(appSettings).h1}>Hola Usuario!</Text>
      <Text style={fonts(appSettings).h1}>Bienvenido</Text>
      <Text style={fonts(appSettings).p}>Túi {(isLoggedIn ) ? "si" : "no"} estas logeado</Text>
    </View>
  );
}

export default Home;
