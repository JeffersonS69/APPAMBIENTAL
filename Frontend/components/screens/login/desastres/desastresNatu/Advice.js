
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Center, Image, NativeBaseProvider, ScrollView } from "native-base";
function Advice({ navigation }) {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Image
          alt="fondo"
          resizeMode="cover"
          position="absolute"
          width="100%"
          height={"100%"}
          source={{
            uri: "https://i.ibb.co/rf60j9t/bg2.jpg",
          }}
        />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Center style={styles.logoContainer}>
            <View style={styles.logoWrapper}>
              <Image
                alt="logo"
                style={styles.logoImage}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/6683/6683592.png",
                }}
              />
              <Text style={styles.pageTitle}>QUE HACER DURANTE UNA CATASTROFE NATURAL</Text>
            </View>
          </Center>
          <View style={styles.backgroundImageContainer}>
          </View>

          <View style={styles.stepsContainer}>
            <Step
              number="1"
              title="INVESTIGA"
              description={
                <>
                  Familiarízate con los riesgos que podrían ocurrir en tu comunidad.
                </>
              }
            />
            <Step
              number="2"
              title="PREPARA TU HOGAR"
              description={
                <>
                  Coordina con tu familia sobre el protocolo de emergencia. Ten a mano los números importantes.
                </>
              }
            />
            <Step
              number="3"
              title="HAZ UN KIT DE EMERGENCIA"
              description={
                <>
                  Debería contener comida, agua y suministros para un mínimo de 72 horas.
                </>
              }
            />
            <Step
              number="4"
              title="MANTENTE INFORMADO"
              description={
                <>
                  Contacta con tu gobierno local para saber cómo informará de las alertas e instrucciones durante una emergencia.
                </>
              }
            />
          </View>
          <TouchableOpacity style={styles.redirectImageContainer} onPress={() => navigation.navigate("Tidings")}>

            <Image
              alt="flecha"
              resizeMode="cover"
              position="absolute"
              width="100"
              height={"100%"}
              source={{
                uri: "https://i.ibb.co/vJGjJtB/next-97612-960-720.webp",
              }}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
}

function Step({ number, title, description }) {
  return (
    <View style={styles.stepContainerR}>
      <View style={styles.stepNumberContainer}>
        <Text style={styles.stepNumber}>{number}</Text>
      </View>
      <View style={styles.stepContent}>
        <Text style={styles.stepTitle}>{title}</Text>
        <Text style={styles.stepDescription}>{description}</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#89D5C9",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
    color: "White", // Text color
  },
  stepsContainer: {
    marginVertical: 16,
  },
  stepContainerR: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 22,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 10,
    backgroundColor: "rgba(  171, 235, 198 , 0.8)",
    marginRight: 8,
  },
  stepNumberContainer: {
    backgroundColor: "#0090ad81",
    backgroundColor: "black", // Color de fondo negro para el rectángulo
    width: 36, // Ancho del contenedor
    height: 100, // Altura del contenedor
    justifyContent: "center", // Alineación vertical del contenido al centro
    alignItems: "center", // Alineación horizontal del contenido al centro
    marginRight: 12, // Margen derecho
    marginLeft: 10, // Margen izquierdo
    borderWidth: 2, // Ancho del borde
    marginTop: 0, // Margen superior
    borderRadius: 1, // Bordes redondeados para el rectángulo
  },
  stepNumber: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white", // Step number text color


  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black", // Step title text color
    marginTop: 5,

  },
  stepDescription: {
    fontSize: 16,
    marginTop: 4,
    color: "black", // Step description text color
    marginBottom: 5
  },
  pageTitle: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
    marginTop: 1, // Adding some space at the top
    marginBottom: 16, // Adding some space at the bottom

  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30, // Ajusta el valor para mover el logo hacia abajo
  },
  logoWrapper: {
    width: 500, // Ajusta el tamaño según tus necesidades
    height: 250, // Ajusta el tamaño según tus necesidades
    backgroundColor: "rgba(  133, 193, 233  , 0.75)",
    borderRadius: 35, // Mitad del ancho/altura para obtener bordes redondeados
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: 150,
    height: 150,
    borderRadius: 30,
    backgroundColor: 'transparent', // Usa 'rgba(255, 255, 255, 0)' para fondo transparente
  },
  optionBackground: {
    backgroundColor: "transparent", // Verde lima semitransparente
    borderRadius: 15,
    padding: 10,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  redirectImageContainer: {
    width: "100",
    height: 100, // Ajusta la altura según tus necesidades
    marginTop: 5, // Ajusta el margen superior según tus necesidades
    alignItems: "center",
  },
});

export default Advice;