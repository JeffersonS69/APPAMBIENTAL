import {
  Box,
  Center,
  Container,
  NativeBaseProvider,
  VStack,
  Text,
  View,
} from "native-base";
import React, { useContext } from "react";
import { Context } from "../../../globalContext/globalContext";
import containers from "../../../styles/containers";
import { TouchableOpacity } from "react-native";
import { useClimas } from "./hooks/useClimas";

export default function PrincipalClim() {
  const globalContext = useContext(Context);
  const { appSettings } = globalContext;
  const { esmeraldas, Quito, Manta, Guayaquill, SantoD, Cuenca } = useClimas();

  const esmer = esmeraldas?.main?.temp.toFixed(0);
  const quito = Quito?.main?.temp.toFixed(0);
  const manta = Manta?.main?.temp.toFixed(0);
  const guaya = Guayaquill?.main?.temp.toFixed(0);
  const santoDomin = SantoD?.main?.temp.toFixed(0);
  const cuenca = Cuenca?.main?.temp.toFixed(0);


  return (
    <NativeBaseProvider>
      <Container>
        <View style={containers(appSettings).outerPage}>
          <VStack space={4} alignItems="center">
            <TouchableOpacity onPress={() => navigation.navigate("Preparing")}>
              <Center
                w="64"
                h="20"
                bg="indigo.300"
                rounded="md"
                shadow={3}
                borderWidth={2}
                borderColor="#d3f5ee"
              >
                <Text>Esmeraldas</Text>
                <View>
                  {esmeraldas ? (
                    <>
                      <Text>Temperatura: {esmer - 273}°C</Text>
                    </>
                  ) : (
                    <Text>Cargando datos del clima...</Text>
                  )}
                </View>
              </Center>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Preparing")}>
              <Center
                w="64"
                h="20"
                bg="indigo.300"
                rounded="md"
                shadow={3}
                borderWidth={2}
                borderColor="#d3f5ee"
              >
                <Text>Quito</Text>
                <View>
                  {quito ? (
                    <>
                      <Text>Temperatura: {quito - 273}°C</Text>
                    </>
                  ) : (
                    <Text>Cargando datos del clima...</Text>
                  )}
                </View>
              </Center>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Preparing")}>
              <Center
                w="64"
                h="20"
                bg="indigo.300"
                rounded="md"
                shadow={3}
                borderWidth={2}
                borderColor="#d3f5ee"
              >
                <Box>Manta</Box>
                <View>
                  {manta ? (
                    <>
                      <Text>Temperatura: {manta - 273}°C</Text>
                    </>
                  ) : (
                    <Text>Cargando datos del clima...</Text>
                  )}
                </View>
              </Center>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Preparing")}>
              <Center
                w="64"
                h="20"
                bg="indigo.300"
                rounded="md"
                shadow={3}
                borderWidth={2}
                borderColor="#d3f5ee"
              >
                <Box>Guayaquil</Box>
                <View>
                  {guaya ? (
                    <>
                      <Text>Temperatura: {guaya - 273}°C</Text>
                    </>
                  ) : (
                    <Text>Cargando datos del clima...</Text>
                  )}
                </View>
              </Center>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Preparing")}>
              <Center
                w="64"
                h="20"
                bg="indigo.300"
                rounded="md"
                shadow={3}
                borderWidth={2}
                borderColor="#d3f5ee"
              >
                <Box>Santo Domingo</Box>
                <View>
                  {esmeraldas ? (
                    <>
                      <Text>Temperatura: {santoDomin - 273}°C</Text>
                    </>
                  ) : (
                    <Text>Cargando datos del clima...</Text>
                  )}
                </View>
              </Center>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Preparing")}>
              <Center
                w="64"
                h="20"
                bg="indigo.300"
                rounded="md"
                shadow={3}
                borderWidth={2}
                borderColor="#d3f5ee"
              >
                <Box>Cuenca</Box>
                <View>
                  {esmeraldas ? (
                    <>
                      <Text>Temperatura: {cuenca - 273}°C</Text>
                    </>
                  ) : (
                    <Text>Cargando datos del clima...</Text>
                  )}
                </View>
              </Center>
            </TouchableOpacity>
          </VStack>
        </View>
      </Container>
    </NativeBaseProvider>
  );
}
