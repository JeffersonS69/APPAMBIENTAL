import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Context } from "../globalContext/globalContext.js";
import containers from "../styles/containers.js";
import fonts from "../styles/fonts.js";
import buttons from "../styles/buttons.js";
import margins from "../styles/margins.js";


function Landing({ navigation, route, props}) {
  const globalContext = useContext(Context);
  const { isLoggedIn, appSettings } = globalContext;

  return (
    <View style={[containers(appSettings).outerPage]}>
      <Text style={fonts(appSettings).h1}>Hola Usuario!</Text>
      <Text style={fonts(appSettings).p}>Tú {(isLoggedIn ) ? "" : "no"} estas logeado</Text>
      <View style={[containers(appSettings).ladingButtonContainer]}>
      <TouchableOpacity style={[buttons(appSettings).login]}onPress={()=>navigation.navigate("Login")}>
        <Text style={{color: 'white'}}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[buttons(appSettings).login, margins.topTenPercent]}onPress={()=>navigation.navigate("Register")}>
        <Text style={{color: 'white'}}>Registarse</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

export default Landing;
