import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Context } from "../globalContext/globalContext.js";
import containers from "../styles/containers.js";
import fonts from "../styles/fonts.js";
import buttons from "../styles/buttons.js";
import margins from "../styles/margins.js";
import { Box, Center, Container, NativeBaseProvider, VStack } from "native-base";

function Home({ navigation, route, props }) {
  const globalContext = useContext(Context);
  const { isLoggedIn, appSettings } = globalContext;

  return (
    <NativeBaseProvider>
      <Container>
        <View style={containers(appSettings).outerPage}>
          <Text style={fonts(appSettings).h1}>Hola Usuario!</Text>
          <Text style={fonts(appSettings).h1}>Bienvenido</Text>
          <Text style={fonts(appSettings).p}>
            Tú {isLoggedIn ? "si" : "no"} estas logeado
          </Text>
          <Box>
            <VStack space={4} alignItems="center">
              <Center w="64" h="20">
                <TouchableOpacity
                  style={[
                    buttons(appSettings).login,
                    margins.topTenPercentButton,
                  ]}
                  onPress={() => navigation.navigate("Tidings")}
                >
                  <Text style={{ color: "white" }}>Ya podemos continuar</Text>
                </TouchableOpacity>
              </Center>
            </VStack>
          </Box>
        </View>
      </Container>
    </NativeBaseProvider>
  );
}

export default Home;
