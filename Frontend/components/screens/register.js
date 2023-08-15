import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Context } from "../globalContext/globalContext.js";
import containers from "../styles/containers.js";
import fonts from "../styles/fonts.js";
import inputs from "../styles/inputs.js";
import margins from "../styles/margins.js";
import buttons from "../styles/buttons.js";

function Register({ navigation, route, props }) {
  const globalContext = useContext(Context);
  const { setIsLoggedIn, appSettings, domain, userObj, setUserObj, setToken } =
    globalContext;

  const [securePassword, setSecurePassword] = useState(true);
  const [email, setEmail] = useState();
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");

  function handleLogin() {
    let body = JSON.stringify({
      username: email.toLowerCase(),
      first_name: firstname,
      last_name: lastname,
      email: email.toLowerCase(),
      password: password,
    });

    fetch(`${domain}/api/v1/user/create-user/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then((res) => {
        if (res.ok) return res.json();
        else {
          setError("Usuario ya existe 😥");
          throw res.json();
        }
      })
      .then((json) => {
        setUserObj(json);
        setToken(json.token);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <KeyboardAvoidingView
      style={containers(appSettings).outerPage}
      contentContainerStyle={
        containers(appSettings).keyboardAwareInnerContainer
      }
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={containers(appSettings).formBox}>
        <Text style={[fonts(appSettings).h1, margins.top30Percent]}>
          Registro
        </Text>

        <Text style={[fonts(appSettings).inputLabel, margins.topTenPercent]}>
          Nombre
        </Text>
        <TextInput
          value={firstname}
          onChangeText={(text) => setFirstName(text)}
          textContentType="name"
          autoCompleteType="email"
          style={inputs(appSettings).textInput}
          placeholder="Nombre"
        />

        <Text style={[fonts(appSettings).inputLabel, margins.topTenPercent]}>
          Apellido
        </Text>
        <TextInput
          value={lastname}
          onChangeText={(text) => setLastName(text)}
          textContentType="username"
          autoCompleteType="email"
          style={inputs(appSettings).textInput}
          placeholder="Apellido"
        />

        <Text style={[fonts(appSettings).inputLabel, margins.topTenPercent]}>
          Correo electrónico
        </Text>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          textContentType="username"
          autoCompleteType="email"
          style={inputs(appSettings).textInput}
          placeholder="Correo Electrónico"
        />

        <Text style={[fonts(appSettings).inputLabel, margins.topTenPercent]}>
          Contraseña
        </Text>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={securePassword}
          textContentType="password"
          autoCompleteType="password"
          style={inputs(appSettings).textInput}
          placeholder="Contraseña"
        />

        <Text style={fonts(appSettings).errorLabel}>{error}</Text>

        <TouchableOpacity
          style={[buttons(appSettings).login]}
          onPress={() => handleLogin()}
        >
          <Text style={{ color: "white" }}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Register;
