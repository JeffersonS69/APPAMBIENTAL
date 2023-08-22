import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Button, NativeBaseProvider } from "native-base";
import { Context } from "../../globalContext/globalContext";

export default function NewVolunteering({ navigation }) {
  const globalContext = useContext(Context);
  const { domain } = globalContext;
  const [titulo, setTitulo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState(
    require("./../../../assets/Esmeraldas-canton.jpg")
  ); // Cambia la ruta por la correcta
  const [asistentes, setAsistentes] = useState(0);

  const handleCrearPublicacion = async () => {
    if (!titulo || !direccion || !descripcion || !imagen || asistentes < 0) {
      alert("Por favor, completa todos los campos correctamente.");
      return;
    }

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("direccion", direccion);
    formData.append("descripcion", descripcion);
    formData.append("asistentes", asistentes.toString());
    formData.append("imagen", {
      uri: imagen,
      type: "image/jpeg",
      name: "image.jpg",
    });

    console.log(JSON.stringify(formData));

    fetch(`${domain}/api/v1/blog/publicaciones`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            titulo: titulo,
            direccion: direccion,
            descripcion: descripcion,
            asistentes: asistentes,
        }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json(); // Devuelve la promesa de res.json()
          } else {
            throw new Error("Network response was not ok");
          }
        })
        .then((nuevaPublicacion) => {
          console.log("Nueva publicación creada:", nuevaPublicacion);
          navigation.navigate("Volunteering", { nuevaPublicacion }); // Navega después de obtener la respuesta exitosa
        })
        .catch((error) => {
          console.error("Error al crear la publicación:", error);
        });
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.encabezado}>Crear Nueva Publicación</Text>
          <TextInput
            style={styles.input}
            placeholder="Título"
            value={titulo}
            onChangeText={setTitulo}
          />
          <TextInput
            style={styles.input}
            placeholder="Dirección"
            value={direccion}
            onChangeText={setDireccion}
          />
          <TextInput
            style={styles.input}
            placeholder="Descripción"
            value={descripcion}
            onChangeText={setDescripcion}
            multiline
          />
          <TextInput
            style={styles.input}
            placeholder="Asistentes"
            value={asistentes.toString()}
            onChangeText={(text) => setAsistentes(parseInt(text))}
            keyboardType="numeric"
          />
          <Button
            style={styles.crearPublicacionButton}
            onPress={handleCrearPublicacion}
          >
            <Text style={styles.crearPublicacionButtonText}>
              Crear Publicación
            </Text>
          </Button>
        </View>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  formContainer: {
    width: "80%",
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  encabezado: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    marginBottom: 12,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
  },
  imagenPickerButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginBottom: 12,
  },
  imagenPickerText: {
    color: "white",
    fontWeight: "bold",
  },
  imagenPreview: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 12,
  },
  crearPublicacionButton: {
    backgroundColor: "#007bff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
  },
  crearPublicacionButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
