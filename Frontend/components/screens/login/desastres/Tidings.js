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
      <Container>
        <View style={containers(appSettings).outerPage}>
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
            <TouchableOpacity onPress={() => navigation.navigate("Preparing")}>
              <Center
                w="64"
                h="20"
                bg="indigo.300"
                rounded="md"
                shadow={3}
                borderWidth={2}
                borderColor="#2F3370"
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

            <TouchableOpacity onPress={() => navigation.navigate("warnings")}>
              <Center
                w="64"
                h="20"
                bg="indigo.500"
                rounded="md"
                shadow={3}
                borderWidth={2}
                borderColor="#2F3370"
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
                    uri: "https://i.ibb.co/3C9cQ95/alertas-desastres.png",
                  }}
                />
                <Text>Alertas de desastres</Text>
              </Center>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("view")}>
              <Center
                w="64"
                h="20"
                bg="indigo.700"
                rounded="md"
                shadow={3}
                borderWidth={2}
                borderColor="#2F3370"
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
                    uri: "https://i.ibb.co/RCNwsqw/ver-desastres-recientes.png",
                  }}
                />
                <Text>Ver desastres recientes</Text>
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
                borderColor="#2F3370"
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
    </NativeBaseProvider>
  );
}

export default Tidings;
