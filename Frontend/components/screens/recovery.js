import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Center, Image, NativeBaseProvider, ScrollView } from "native-base";

function Recovery() {
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
            uri: "https://img.freepik.com/vector-gratis/ilustracion-marco-vectorial-hojas-verdes-sobre-fondo-desenfocado-abstracto_8130-1958.jpg",
          }}
        />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Center>
            <Image
              alt="logo"
              size={150}
              borderRadius={30}
              backgroundColor="#FFFF"
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/6683/6683592.png",
              }}
            />
          </Center>
          <Text style={styles.pageTitle}>
            ¿Qué hacer después de un desastre natural?
          </Text>
          <View style={styles.stepsContainer}>
            <Step
              number="1"
              title="Tranquilizarse"
              description={
                <>
                  Lo primero es {"\n"}mantener la calma para evitar accidentes y
                  evaluar la situación.
                </>
              }
              image="https://i.pinimg.com/originals/70/00/ba/7000ba8236f3d4d2a59ef56846bbecad.jpg"
            />
            <Step2
              number="2"
              title={<>Verifica tu seguridad</>}
              description={
                <>
                  Asegúrate de que estás a salvo y no haya peligros inmediatos.
                </>
              }
              image="https://geografia23.files.wordpress.com/2013/05/zona-segura.jpg"
            />
            <Step
              number="3"
              title={<>Comunica tu estado</>}
              description={<>Informa a tus seres queridos que estás bien.</>}
              image="https://img.freepik.com/vector-premium/tiempo-familia-juntos-ilustracion-hombre-chateando-su-familia-usando-aplicacion-videollamada-telefono-inteligente-dispositivo-telefono-inteligente-mano-humana-personajes-dibujos-animados-diseno-plano_1207-966.jpg?w=2000"
            />
            <Step2
              number="4"
              title="Escucha a las autoridades"
              description={
                <>Sigue las instrucciones de las autoridades locales.</>
              }
              image="https://pbs.twimg.com/media/EUhfiGEUcAAxWxv.png"
            />
            <Step
              number="5"
              title={<>Reúnete en un lugar seguro</>}
              description={
                <>Si es necesario, reúnete con tu familia en un lugar seguro.</>
              }
              image="https://i.ytimg.com/vi/wSh4kJPZwcE/maxresdefault.jpg"
            />

            {/* Agrega más pasos según sea necesario */}
          </View>
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
}

function Step({ number, title, description, image }) {
  return (
    <View style={styles.stepContainerR}>
      <View style={styles.stepNumberContainer}>
        <Text style={styles.stepNumber}>{number}</Text>
      </View>
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
function Step2({ number, title, description, image }) {
  return (
    <View style={styles.stepContainerL}>
      <View style={styles.stepNumberContainer}>
        <Text style={styles.stepNumber}>{number}</Text>
      </View>
      <View style={styles.stepContent}>
        <Text style={styles.stepTitle2}>{title}</Text>
        <Text style={styles.stepDescription2}>{description}</Text>
      </View>
      <View>
        <Image
          alt="logo"
          size={110}
          borderRadius={30}
          marginLeft={5}
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
    color: "black", // Text color
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
    backgroundColor: "#A8DF8E", // Turquoise background color for step number
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
    color: "black", // Step number text color
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
  stepTitle2: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black", // Step title text color
    textAlign: "right",
    marginTop: 5,
  },
  stepDescription: {
    fontSize: 16,
    marginTop: 4,
    color: "black", // Step description text color
    marginBottom: 5,
  },
  stepDescription2: {
    fontSize: 16,
    marginTop: 4,
    color: "black", // Step description text color
    textAlign: "right",
    marginBottom: 5,
  },
  pageTitle: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
    marginTop: 24, // Adding some space at the top
    marginBottom: 16, // Adding some space at the bottom
  },
});

export default Recovery;
