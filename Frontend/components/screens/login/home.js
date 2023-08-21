import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Context } from "../../globalContext/globalContext.js";
import containers from "../../styles/containers.js";
import fonts from "../../styles/fonts.js";
import buttons from "../../styles/buttons.js";
import margins from "../../styles/margins.js";
import {
  Box,
  Center,
  Container,
  Image,
  NativeBaseProvider,
  VStack,
} from "native-base";

function Home({ navigation, route, props }) {
  const globalContext = useContext(Context);
  const { isLoggedIn, appSettings } = globalContext;

  return (
    <NativeBaseProvider>
      <Container>
        <View style={containers(appSettings).outerPage}>
          <Text style={fonts(appSettings).h1}>Hola Usuario Bienvenido!</Text>
          <Box>
            <VStack space={4} alignItems="center">
              <TouchableOpacity
                style={[
                  buttons(appSettings).login,
                  margins.topTenPercentButton,
                ]}
                onPress={() => navigation.navigate("Advice")}
              >
                <Center
                  w="64"
                  h="20"
                  bg="indigo.300"
                  rounded="md"
                  shadow={3}
                  borderWidth={2}
                  borderColor="#d3f5ee"
                >
                  <Image
                    alt="logo"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      marginRight: 10,
                    }}
                    source={{
                      uri: "https://images.vexels.com/media/users/3/135966/isolated/preview/6cd30e659697358193968fc276b4f9e3-casa-de-inundacion.png",
                    }}
                  />
                  <Text>Desastre natural</Text>
                </Center>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("PrincipalClima")}
              >
                <Center
                  w="64"
                  h="20"
                  bg="indigo.300"
                  rounded="md"
                  shadow={3}
                  borderWidth={2}
                  borderColor="#d3f5ee"
                >
                  <Image
                    alt="logo"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      marginRight: 10,
                    }}
                    source={{
                      uri: "https://cdn-icons-png.flaticon.com/512/1116/1116453.png",
                    }}
                  />
                  <Text>Clima</Text>
                </Center>
              </TouchableOpacity>
            </VStack>
          </Box>
        </View>
      </Container>
    </NativeBaseProvider>
  );
}

export default Home;
