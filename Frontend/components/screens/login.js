import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Context } from "../globalContext/globalContext.js";
import containers from "../styles/containers.js";
import fonts from "../styles/fonts.js";
import inputs from "../styles/inputs.js";
import margins from "../styles/margins.js";
import buttons from "../styles/buttons.js";
import {
  Box,
  Center,
  Container,
  Image,
  NativeBaseProvider,
  VStack,
} from "native-base";

function Login({ navigation, route, props }) {
  const globalContext = useContext(Context);
  const { setIsLoggedIn, appSettings, domain, userObj, setUserObj, setToken } =
    globalContext;

  const [securePassword, setSecurePassword] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");

  function handleLogin() {
    let body = JSON.stringify({
      username: email.toLowerCase(),
      password: password,
    });

    fetch(`${domain}/api/v1/user/login-user/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then((res) => {
        if (res.ok) return res.json();
        else {
          setError(
            "Contraseña o Email incorrecta, ingrese bien sus credenciales 🥹"
          );
          throw res.json();
        }
      })
      .then((json) => {
        setUserObj(json);
        setToken(json.token);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        setError("Credenciales incorrectos 🥹");
        console.log(error);
      });
  }

  return (
    <NativeBaseProvider>
      <Container>
        <View style={containers(appSettings).outerPage}>
          <View style={containers(appSettings).formBox}>
            <Center>
              <Image
                alt="logo"
                size={150}
                borderRadius={30}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/6683/6683592.png",
                }}
              />
            </Center>
            {error ? (
              <Text
                style={[
                  fonts(appSettings).errorLabel,
                  {
                    color: "#000",
                  },
                ]}
              >
                {error}
              </Text>
            ) : null}
            <Box style={{ marginTop: "10%" }}>
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                textContentType="username"
                autoCompleteType="email"
                style={[
                  inputs(appSettings).textInput,
                  {
                    borderColor: "#2F3370",
                    borderWidth: 2,
                    borderRadius: 25,
                    paddingHorizontal: 10,
                  },
                ]}
                placeholder="🔗 E-mail"
              />
            </Box>
            <Box style={{ marginTop: "10%" }}>
              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={securePassword}
                textContentType="password"
                autoCompleteType="password"
                placeholder="🔑 Contraseña"
                style={[
                  inputs(appSettings).textInput,
                  {
                    borderColor: "#2F3370",
                    borderWidth: 2,
                    borderRadius: 25,
                    paddingHorizontal: 10,
                  },
                ]}
              />
            </Box>
            <Box>
              <VStack space={4} alignItems="center">
                <Center w="64" h="20">
                  <TouchableOpacity
                    style={[
                      buttons(appSettings).login,
                      margins.topTenPercentButton,
                    ]}
                    onPress={() => handleLogin()}
                  >
                    <Text style={{ color: "white" }}>Acceder</Text>
                  </TouchableOpacity>
                </Center>
                <VStack>
                  <Center w="64" h="20">
                    <TouchableOpacity
                      style={[buttons(appSettings).login]}
                      onPress={() => navigation.navigate("Register")}
                    >
                      <Text style={{ color: "white" }}>No tengo cuenta</Text>
                    </TouchableOpacity>
                  </Center>
                </VStack>
              </VStack>
            </Box>
          </View>
        </View>
      </Container>
    </NativeBaseProvider>
  );
}

export default Login;
