import React, { useContext } from "react";
import {
  Container,
  NativeBaseProvider,
  VStack,
  Text,
  Box,
  View,
} from "native-base";
import containers from "../../../../styles/containers";
import { Context } from "../../../../globalContext/globalContext";

export default function DetallesClim({ route }) {
  const globalContext = useContext(Context);
  const { appSettings } = globalContext;

 
  const dataCity = route.params;

  const tempGenera = (dataCity?.main?.temp - 273).toFixed(0);
  const tempMin = (dataCity?.main?.temp_min - 273).toFixed(0);
  const tempMax = (dataCity?.main?.temp_max - 273).toFixed(0);
  const tempsent = (dataCity?.main?.feels_like - 273).toFixed(0);

  return (
    <NativeBaseProvider>
      <Container p={4}>
        <View style={containers(appSettings).outerPagePP}>
          <VStack space={4}>
            <Box p={2} bg="blue.200" borderRadius={8}>
              <Text fontSize="xl" fontWeight="bold">
                {dataCity?.name}
              </Text>
            </Box>
            <Box p={2} bg="blue.100" borderRadius={8}>
              <Text fontSize="lg">Estado del Tiempo</Text>
              <Text>Main: {dataCity?.weather[0]?.main}</Text>
              <Text>Descripción: {dataCity?.weather[0]?.description}</Text>
            </Box>
            <Box p={2} bg="blue.100" borderRadius={8}>
              <Text fontSize="lg">Temperatura</Text>
              <Text>Actual: {tempGenera} °C</Text>
              <Text>Mínima: {tempMin} °C</Text>
              <Text>Máxima: {tempMax} °C</Text>
              <Text>Clima se siente a: {tempsent} °C</Text>
            </Box>
            <Box p={2} bg="blue.100" borderRadius={8}>
              <Text fontSize="lg">Detalles Adicionales</Text>
              <Text>Humedad: {dataCity?.main?.humidity}%</Text>
              <Text>Visibilidad: {dataCity?.visibility}</Text>
              <Text>Nubes: {dataCity?.clouds?.all}%</Text>
            </Box>
          </VStack>
        </View>
      </Container>
    </NativeBaseProvider>
  );
}
