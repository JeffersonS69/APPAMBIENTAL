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
import React, { useContext } from "react";
import { Context } from "../../../globalContext/globalContext";
import { TouchableOpacity } from "react-native";
import { useClimas } from "./hooks/useClimas";

export default function PrincipalClim({ navigation }) {
  const globalContext = useContext(Context);
  const { appSettings } = globalContext;
  const { esmeraldas, Quito, Manta, Guayaquill, SantoD, Cuenca, Ibarra } =
    useClimas();

  const renderCity = (city, cityName, long, lat) => {
    const temperature = city?.main?.temp?.toFixed(0) - 273;
    const imageUrl = getCityImageUrl(cityName);

    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("DetallesClima", {
            dataCity: city,
            nameCity: cityName,
            long: long,
            lat: lat,
          });
        }}
      >
        <Step
          title={cityName}
          description={
            city ? `Temperatura: ${temperature}°C` : "Cargando datos del clima..."
          }
          image={imageUrl}
        />
      </TouchableOpacity>
    );
  };

  const getCityImageUrl = (cityName) => {
    switch (cityName) {
      case "Esmeraldas":
        return "https://www.lahora.com.ec/wp-content/uploads/2022/08/Bandera-e1659677333793.jpg";
      case "Quito":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Quito.svg/2560px-Flag_of_Quito.svg.png";
      case "Manta":
        return "https://ec.viajandox.com/uploads/Bandera%20de%20Manta_1.jpg";
      case "Guayaquil":
        return "https://static.magflags.net/media/catalog/product/cache/75170699113cf9b1963820a3ea1bab40/E/C/EC-prov_ncia_guayas_1.png";
      case "Santo Domingo":
        return "https://geopoliticaybanderas.files.wordpress.com/2021/02/chimborazo.png";
      case "Cuenca":
        return "https://elyex.com/wp-content/uploads/2022/08/bandera-cuenca-ecuador.webp";
      case "Ibarra":
        return "https://us.123rf.com/450wm/mra7med/mra7med2301/mra7med230100286/200475882-ilustraci%C3%B3n-3d-de-una-bandera-ondeante-de-la-ciudad-de-ecuador-de-ibarra.jpg";
      default:
        return "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg";
    }
  };

  return (
    <NativeBaseProvider>
        <View style={styles.background}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Image
            alt="fondo"
            resizeMode="cover"
            position="absolute"
            width="100%"
            height="100%"
            source={{
              uri:
                "https://kauainownews.com/wp-content/uploads/2022/09/braden-jarvis-prSogOoFmkw-unsplash.jpg",
            }}
          />
            <Center>
              <Text fontSize="xl" fontWeight="bold" color="black" mt={10}>
                Estación del Clima
              </Text>
            </Center>
            <VStack space={4} p={4}>
              {renderCity(esmeraldas, "Esmeraldas", "-79.6833", "0.9333")}
              {renderCity(Quito, "Quito", "-78.5249", "-0.2299")}
              {renderCity(Manta, "Manta", "-80.7333", "-0.95")}
              {renderCity(Guayaquill, "Guayaquil", "-79.9", "-2.1667")}
              {renderCity(SantoD, "Santo Domingo", "-79.15", "-0.25")}
              {renderCity(Cuenca, "Cuenca", "-78.9833", "-2.8833")}
              {renderCity(Ibarra, "Ibarra", "-78.1167", "0.35")}
            </VStack>
          </ScrollView>
        </View>
    </NativeBaseProvider>
  );
}

function Step({ title, description, image }) {
  return (
    <View style={styles.stepContainer}>
      <View style={styles.stepContent}>
        <Text style={styles.stepTitle}>{title}</Text>
        <Text style={styles.stepDescription}>{description}</Text>
      </View>
      <Image
        alt="logo"
        size={100}
        borderRadius={30}
        source={{
          uri: image,
        }}
      />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0", // Color de fondo del contenedor
  },
  background: {
    flex: 1,
    backgroundColor: "#3498db", // Color de fondo principal
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  stepDescription: {
    fontSize: 16,
    marginBottom: 5,
  },
};
