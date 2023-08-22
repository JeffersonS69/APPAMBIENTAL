import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button, NativeBaseProvider } from "native-base";
import { Context } from "../../globalContext/globalContext";

export default function Volunteering({ props, navigation }) {
  const globalContext = useContext(Context);
  const { domain } = globalContext;
  const [imagen, setImagen] = useState(
    require("./../../../assets/Esmeraldas-canton.jpg")
  );
  const [publicaciones, setPublicaciones] = useState([]);
  const [reacciones, setReacciones] = useState({});

  const fetchPublicaciones = async () => {
    try {
      const response = await fetch(`${domain}/api/v1/blog/publicaciones`);
      if (response.ok) {
        const data = await response.json();
        setPublicaciones(data);
      } else {
        console.error("Error al obtener las publicaciones:", response.status);
      }
    } catch (error) {
      console.error("Error al obtener las publicaciones:", error);
    }
  };

  useEffect(() => {
    fetchPublicaciones();
  }, []);

  const renderReactionButton = (iconName, count) => (
    <TouchableOpacity
      style={styles.reactionButton}
      onPress={() => handleReactionPress(iconName)}
    >
      <Ionicons name={iconName} size={24} color="#555" />
      <Text style={styles.reactionCount}>{count}</Text>
    </TouchableOpacity>
  );

  const handleReactionPress = (iconName) => {
    const updatedReacciones = { ...reacciones };
    updatedReacciones[iconName] = (updatedReacciones[iconName] || 0) + 1;
    setReacciones(updatedReacciones);
  };

  const getReactionCount = (iconName) => {
    return reacciones[iconName] || 0;
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.publicacionItem}>
      <Image source={imagen} style={styles.imagen} />
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>{item.titulo}</Text>
      </View>
      <View style={styles.direccionContainer}>
        <Ionicons
          name="location-outline"
          size={16}
          color="#888"
          style={styles.direccionIcon}
        />
        <Text style={styles.direccion}>{item.direccion}</Text>
      </View>
      <Text style={styles.descripcion}>{item.descripcion}</Text>
      <Text style={styles.asistentes}>
        {item.asistentes} personas asistirán
      </Text>
      <View style={styles.reaccionesContainer}>
        <View style={styles.reaccionesButtons}>
          {renderReactionButton(
            "thumbs-up-outline",
            getReactionCount("thumbs-up-outline")
          )}
          {renderReactionButton(
            "heart-outline",
            getReactionCount("heart-outline")
          )}
          {renderReactionButton(
            "chatbubble-outline",
            getReactionCount("chatbubble-outline")
          )}
          {renderReactionButton(
            "share-social-outline",
            getReactionCount("share-social-outline")
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text style={styles.encabezado}>Publicaciones de Voluntariado</Text>

        <View style={styles.buttonsContainer}>
          <Button
            style={styles.crearPublicacionButton}
            onPress={() => navigation.navigate("NewVolunteering")}
          >
            <Text style={styles.crearPublicacionButtonText}>
              Crear Publicación
            </Text>
          </Button>
          <Button style={styles.recargarButton} onPress={fetchPublicaciones}>
            <Text style={styles.recargarButtonText}>Recargar</Text>
          </Button>
        </View>
        {publicaciones.length > 0 ? (
          <FlatList
            data={publicaciones}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text style={styles.encabezado}>No hay datos disponibles.</Text>
        )}
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  encabezado: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 16,
    textAlign: "center",
  },
  publicacionItem: {
    backgroundColor: "#ffffff",
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  recargarButton: {
    marginBottom: 8,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 8,
  },
  recargarButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  crearPublicacionButton: {
    backgroundColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
  },
  imagen: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  tituloContainer: {
    alignItems: "center",
    marginBottom: 8,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
  },
  direccion: {
    fontSize: 14,
    color: "#888",
  },
  direccionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  direccionIcon: {
    marginRight: 4,
  },
  descripcion: {
    fontSize: 16,
    marginBottom: 8,
  },
  crearPublicacionButton: {
    marginBottom: 16,
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
  asistentes: {
    fontSize: 14,
    color: "#888",
  },
  reaccionesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  reaccionesButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 250,
  },
  reactionButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
  },
  reactionCount: {
    marginLeft: 4,
  },
  compartirButton: {
    alignSelf: "flex-end",
    padding: 4,
  },
});
