import {
  Center,
  Container,
  NativeBaseProvider,
  VStack,
  Text,
  View,
  Image,
  ScrollView,
} from "native-base";
import React, { useContext, useState } from "react";
import { Context } from "../../../globalContext/globalContext";
import containers from "../../../styles/containers";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useClimas } from "./hooks/useClimas";

export default function PrincipalClim({ navigation }) {
  const globalContext = useContext(Context);
  const { appSettings } = globalContext;
  const { esmeraldas, Quito, Manta, Guayaquill, SantoD, Cuenca, Ibarra } =
    useClimas();

  const esmer = esmeraldas?.main?.temp.toFixed(0);
  const quito = Quito?.main?.temp.toFixed(0);
  const manta = Manta?.main?.temp.toFixed(0);
  const guaya = Guayaquill?.main?.temp.toFixed(0);
  const santoDomin = SantoD?.main?.temp.toFixed(0);
  const cuenca = Cuenca?.main?.temp.toFixed(0);
  const ibarra = Ibarra?.main?.temp.toFixed(0);
  return (
    <NativeBaseProvider>
      <Container>
        <View style={containers(appSettings).outerPage}>
          <Image
            alt="fondo"
            resizeMode="cover"
            position="absolute"
            width="100%"
            height={"100%"}
            source={{
              uri: "https://us.123rf.com/450wm/getgg/getgg1902/getgg190200282/116692176-dise%C3%B1o-de-pantalla-abstracto-para-aplicaci%C3%B3n-m%C3%B3vil-fondo-degradado-de-color-suave-concepto-de.jpg?ver=6",
            }}
          />
          <Center w="64" h="20" />
          <ScrollView style={{ flex: 1 }}>
            <View style={styles.stepsContainer}>
              <VStack space={4}>
                <TouchableOpacity
                  style={{ backgroundColor: "transparent" }}
                  onPress={() => {
                    navigation.navigate("DetallesClima", {
                      dataCity: esmeraldas,
                      nameCity: "Esmeraldas",
                    });
                  }}
                >
                  <Step
                    title="Esmeraldas"
                    description={
                      <>
                        {esmeraldas ? (
                          <>
                            <Text>Temperatura: {esmer - 273}°C</Text>
                          </>
                        ) : (
                          <Text>Cargando datos del clima...</Text>
                        )}
                      </>
                    }
                    image="https://www.lahora.com.ec/wp-content/uploads/2022/08/Bandera-e1659677333793.jpg"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("DetallesClima", {
                      dataCity: Quito,
                      nameCity: "Quito",
                    });
                  }}
                >
                  <Step
                    title="Quito"
                    description={
                      <>
                        {quito ? (
                          <>
                            <Text>Temperatura: {quito - 273}°C</Text>
                          </>
                        ) : (
                          <Text>Cargando datos del clima...</Text>
                        )}
                      </>
                    }
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Quito.svg/2560px-Flag_of_Quito.svg.png"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("DetallesClima", {
                      dataCity: Manta,
                      nameCity: "Manta",
                    });
                  }}
                >
                  <Step
                    title="Manta"
                    description={
                      <>
                        {manta ? (
                          <>
                            <Text>Temperatura: {manta - 273}°C</Text>
                          </>
                        ) : (
                          <Text>Cargando datos del clima...</Text>
                        )}
                      </>
                    }
                    image="https://ec.viajandox.com/uploads/Bandera%20de%20Manta_1.jpg"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("DetallesClima", {
                      dataCity: Guayaquill,
                      nameCity: "Guayaquil",
                    });
                  }}
                >
                  <Step
                    title="Guayaquil"
                    description={
                      <>
                        {guaya ? (
                          <>
                            <Text>Temperatura: {guaya - 273}°C</Text>
                          </>
                        ) : (
                          <Text>Cargando datos del clima...</Text>
                        )}
                      </>
                    }
                    image="https://static.magflags.net/media/catalog/product/cache/75170699113cf9b1963820a3ea1bab40/E/C/EC-prov_ncia_guayas_1.png"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("DetallesClima", {
                      dataCity: SantoD,
                      nameCity: "Santo Domingo",
                    });
                  }}
                >
                  <Step
                    title="Santo Domingo"
                    description={
                      <>
                        {santoDomin ? (
                          <>
                            <Text>Temperatura: {santoDomin - 273}°C</Text>
                          </>
                        ) : (
                          <Text>Cargando datos del clima...</Text>
                        )}
                      </>
                    }
                    image="https://geopoliticaybanderas.files.wordpress.com/2021/02/chimborazo.png"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("DetallesClima", {
                      dataCity: Cuenca,
                      nameCity: "Cuenca",
                    });
                  }}
                >
                  <Step
                    title="Cuenca"
                    description={
                      <>
                        {cuenca ? (
                          <>
                            <Text>Temperatura: {cuenca - 273}°C</Text>
                          </>
                        ) : (
                          <Text>Cargando datos del clima...</Text>
                        )}
                      </>
                    }
                    image="https://elyex.com/wp-content/uploads/2022/08/bandera-cuenca-ecuador.webp"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("DetallesClima", {
                      dataCity: Ibarra,
                      nameCity: "Ibarra",
                    });
                  }}
                >
                  <Step
                    title="Ibarra"
                    description={
                      <>
                        {ibarra ? (
                          <>
                            <Text>Temperatura: {ibarra - 273}°C</Text>
                          </>
                        ) : (
                          <Text>Cargando datos del clima...</Text>
                        )}
                      </>
                    }
                    image="https://us.123rf.com/450wm/mra7med/mra7med2301/mra7med230100286/200475882-ilustraci%C3%B3n-3d-de-una-bandera-ondeante-de-la-ciudad-de-ecuador-de-ibarra.jpg"
                  />
                  <Center w="64" h="20"></Center>
                </TouchableOpacity>
              </VStack>
            </View>
          </ScrollView>
        </View>
      </Container>
    </NativeBaseProvider>
  );
}
function Step({ number, title, description, image }) {
  return (
    <View style={styles.stepContainerR}>
      <View style={styles.stepContent}>
        <Text style={styles.stepTitle}>{title}</Text>
        <Text style={styles.stepDescription}>{description}</Text>
      </View>
      <View>
        <Image
          alt="logo"
          size={100}
          borderRadius={30}
          marginRight={5}
          marginTop={2}
          marginBottom={2}
          source={{
            uri: image,
          }}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
    color: "black", // Text color
  },

  stepContainerR: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 22,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
  },
  stepContainerL: {
    flexDirection: "row-reverse",
    alignItems: "flex-start",
    marginBottom: 22,
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
  },

  stepNumberContainer: {
    borderRadius: 50,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    marginLeft: 5,
    borderWidth: 2,
    marginTop: 5,
  },
  stepNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  stepDescription: {
    fontSize: 16,
    marginTop: 4,
    marginBottom: 5,
  },
  pageTitle: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 24, // Adding some space at the top
    marginBottom: 16, // Adding some space at the bottom
  },
});
