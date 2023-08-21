import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  Box,
  Center,
  Container,
  Image,
  NativeBaseProvider,
  VStack,
} from "native-base";
import containers from "../../../styles/containers";
import { Context } from "../../../globalContext/globalContext";

function Tidings({ navigation }) {
  const globalContext = useContext(Context);
  const { isLoggedIn, appSettings } = globalContext;
  return (
    <NativeBaseProvider>
      <Box
        flex={1}
        bg="#008037" // Color de fondo deseado
      >
        <Container>
          <View style={containers(appSettings).outerPagePP}>
            <Center my={10}>
              <Image
                alt="logo"
                size={150}
                borderRadius={30}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/6683/6683592.png",
                }}
              />
            </Center>
            <VStack space={4} alignItems="center">
              <TouchableOpacity
                onPress={() => navigation.navigate("Preparing")}
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
                      uri: "https://i.ibb.co/W22nPQz/preparate-desastre-natural.png",
                    }}
                  />
                  <Text>Prepárate para un desastre natural</Text>
                </Center>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Recovery")}>
                <Center
                  w="64"
                  h="20"
                  bg="indigo.700"
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
                      uri: "https://i.ibb.co/ncZhwqs/recuperarse-desatres-naturales.png",
                    }}
                  />
                  <Text>Recuperarse de un desastre natural</Text>
                </Center>
              </TouchableOpacity>
            </VStack>
          </View>
        </Container>
      </Box>
    </NativeBaseProvider>
  );
}

export default Tidings;
