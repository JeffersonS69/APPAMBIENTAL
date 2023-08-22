import React, { useContext, useEffect, useState } from "react";
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
  const dataCity = route.params.dataCity;
  const NameCity = route.params.nameCity;

  return (
    <NativeBaseProvider>
      <Container p={4}>
        <View style={containers(appSettings).outerPagePP}>
          <VStack space={4}>
            <Box p={2} bg="blue.200" borderRadius={8}>
              <>
                {dataCity ? (
                  <>
                    <Text>{NameCity}</Text>
                  </>
                ) : (
                  <Text>Cargando datos del clima...</Text>
                )}
              </>
            </Box>
            <Box p={2} bg="blue.100" borderRadius={8}>
              <Text fontSize="lg">Estado del Tiempo</Text>
              <>
                {dataCity ? (
                  <>
                    <Text> Main: {dataCity?.weather[0]?.main}</Text>
                    <Text>
                      Descripción: {dataCity?.weather[0]?.description}
                    </Text>
                  </>
                ) : (
                  <Text>Cargando datos del clima...</Text>
                )}
              </>
            </Box>
            <Box p={2} bg="blue.100" borderRadius={8}>
              <Text fontSize="lg">Temperatura</Text>
              <Text>Actual: {dataCity?.main?.temp.toFixed(0) - 273} °C</Text>
              <Text>
                Mínima: {dataCity?.main?.temp_min.toFixed(0) - 273} °C
              </Text>
              <Text>
                Máxima: {dataCity?.main?.temp_max.toFixed(0) - 273} °C
              </Text>
              <Text>
                Clima se siente a: {dataCity?.main?.feels_like.toFixed(0) - 273}
                °C
              </Text>
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
