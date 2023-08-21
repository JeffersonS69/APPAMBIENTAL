import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Center, NativeBaseProvider, ScrollView } from "native-base";

function Tidings({ navigation }) {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        {/* Logo */}
        <Center style={styles.logoContainer}>
          <View style={styles.logoWrapper}>
            <Image
              alt="logo"
              style={styles.logoImage}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/6683/6683592.png",
              }}
            />
          </View>
        </Center>

        <View style={styles.backgroundImageContainer}>
          <Image
            alt="fondo"
            style={styles.backgroundImage}
            source={{
              uri: "https://i.ibb.co/BKKR2yV/bg1.jpg", // Coloca aquí la URL de tu imagen de fondo
            }}
          />
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.optionsContainer}>

            {/* Option 1 */}
            <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("Preparing")}>
              <View style={styles.optionBackground}>
                <Image
                  alt="option"
                  style={styles.optionImage}
                  source={{
                    uri: "https://i.ibb.co/tDLGyV8/preparate.png",
                  }}
                />

                <Text style={styles.optionText}>Prepárate para un desastre natural</Text>
              </View>
            </TouchableOpacity>

            {/* Option 2 */}
            <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("warnings")}>
              <View style={styles.optionBackground}>
                <Image
                  alt="option"
                  style={styles.optionImage}
                  source={{
                    uri: "https://i.ibb.co/Ld8X85M/alerta.webp",
                  }}
                />
                <Text style={styles.optionText}>Alertas de desastres</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.optionsContainer}>
            {/* Option 3 */}
            <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("view")}>
              <View style={styles.optionBackground}>
                <Image
                  alt="option"
                  style={styles.optionImage}
                  source={{
                    uri: "https://i.ibb.co/RCNwsqw/ver-desastres-recientes.png",
                  }}
                />
                <Text style={styles.optionText}>Ver desastres recientes</Text>
              </View>
            </TouchableOpacity>

            {/* Option 4 */}
            <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("Recovery")}>
              <View style={styles.optionBackground}>
                <Image
                  alt="option"
                  style={styles.optionImage}
                  source={{
                    uri: "https://i.ibb.co/ncZhwqs/recuperarse-desatres-naturales.png",
                  }}
                />
                <Text style={styles.optionText}>Recuperarse de un desastre natural</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.logoContainer}>
          {/* Logo */}
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
          </ScrollView>
        </View>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  option: {
    margin: 10,
    alignItems: "center",
    maxWidth: "45%",
  },
  optionImage: {
    width: 130,
    height: 130,
    borderRadius: 0,
  },
  optionText: {
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    color: "black",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30, // Ajusta el valor para mover el logo hacia abajo
  },
  logoWrapper: {
    width: 500, // Ajusta el tamaño según tus necesidades
    height: 200, // Ajusta el tamaño según tus necesidades
    backgroundColor: "rgba( 0, 228, 255 , 0.75)",
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
    backgroundColor: "rgba(6, 252, 236, 0.15)", // Verde lima semitransparente
    borderRadius: 15,
    padding: 10,
  },
});

export default Tidings;
