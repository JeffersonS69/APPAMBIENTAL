import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  NativeBaseProvider,
  VStack,
  Text,
  Box,
  View,
  Image,
} from "native-base";
import containers from "../../../../styles/containers";
import { Context } from "../../../../globalContext/globalContext";
import { StyleSheet } from "react-native";

export default function DetallesClim({ route }) {
  const globalContext = useContext(Context);
  const { appSettings } = globalContext;
  const dataCity = route.params.dataCity;
  const NameCity = route.params.nameCity;
  const weatherMain = dataCity?.weather[0]?.main;

  let weatherWord = "";
  let weatherImage = null;

  switch (weatherMain) {
    case "Clear":
      weatherWord = "Despejado";
      weatherImage =
        "https://img.freepik.com/iconos-gratis/nublado_318-338148.jpg";
      break;
    case "Rain":
      weatherWord = "LLuvioso";
      weatherImage =
        "https://cdn-icons-png.flaticon.com/512/10844/10844400.png";
      break;
    case "Clouds":
      weatherWord = "Nublado";
      weatherImage = "https://cdn-icons-png.flaticon.com/512/7084/7084486.png";
      break;
    default:
      weatherWord = "Desconocido";
      weatherImage =
        "https://media.istockphoto.com/id/471100964/es/vector/desconocido-clima-simple-icono-sobre-fondo-blanco.jpg?s=1024x1024&w=is&k=20&c=v2jInf0FE5QjVT5HrV1oTJg0NCw4mB4m2azOZGmvav8=";
      break;
  }

  return (
    <NativeBaseProvider>
      <Container>
        <View style={containers(appSettings).outerPagePP}>
          <Image
            alt="fondo"
            resizeMode="cover"
            position="absolute"
            width="100%"
            height={"100%"}
            source={{
              uri: "https://img.freepik.com/vector-gratis/fondo-degradado-tonos-verdes_23-2148395299.jpg",
            }}
          />
          <Text style={styles.pageTitle}>{NameCity}</Text>
          <VStack space={4}>
            <Box p={2} bg="blue.100" borderRadius={8}>
              <Text fontSize="lg">Estado del Tiempo</Text>
              <>
                {dataCity ? (
                  <>
                    <Text>{weatherWord}</Text>
                    <Image
                      alt="clima"
                      source={{ uri: weatherImage }}
                      style={{ width: 100, height: 100 }}
                    />
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

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
    marginTop: 1, // Adding some space at the top
    marginBottom: 16, // Adding some space at the bottom
  },
});
