import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Context } from "../../../../globalContext/globalContext.js";
import containers from "../../../../styles/containers.js";
import fonts from "../../../../styles/fonts.js";
import buttons from "../../../../styles/buttons.js";
import margins from "../../../../styles/margins.js";
import { banner, logo, bannerText, buttonContainer, button, buttonText, buttonSmallText } from "../../../../styles/AdviceStyles.js";

function Advice({ navigation }) {
    return (
      <View style={containers().outerPage}>
        <View style={banner}>
          {/* Logo */}
          <Center>
          <Image
            alt="logo"
            size={150}
            borderRadius={30}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/6683/6683592.png",
            }}
          />
        </Center>
          <Text style={bannerText}>Qué hacer durante una catástrofe</Text>
        </View>
  
        <View style={buttonContainer}>
          {/* Button 1 */}
          <TouchableOpacity 
          style={[buttons(appSettings).Advice]} 
          onPress={() => navigation.navigate("Advice")}>
            <Text style={buttonText}>Investiga</Text>
            <Text style={buttonSmallText}>
              Familiarízate con los riesgos que podrían ocurrir en tu comunidad
            </Text>
          </TouchableOpacity>
  
          {/* Button 2 */}
          <TouchableOpacity 
          style={[buttons(appSettings).Advice]} 
          onPress={() => navigation.navigate("Advice")}>
            <Text style={buttonText}>Prepara tu hogar</Text>
            <Text style={buttonSmallText}>
              Coordina con tu familia sobre el protocolo de emergencia. Ten a mano los números importantes.
            </Text>
          </TouchableOpacity>
  
          {/* Button 3 */}
          <TouchableOpacity 
          style={[buttons(appSettings).Advice]} 
          onPress={() => navigation.navigate("Advice")}>
            <Text style={buttonText}>Haz un kit de emergencia</Text>
            <Text style={buttonSmallText}>
              Debería contener comida, agua y suministros para un mínimo de 72 horas.
            </Text>
          </TouchableOpacity>
  
          {/* Button 4 */}
          <TouchableOpacity 
          style={[buttons(appSettings).Advice]} 
          onPress={() => navigation.navigate("Advice")}>
            <Text style={buttonText}>Mantente informado</Text>
            <Text style={buttonSmallText}>
              Contacta con tu gobierno local para saber cómo informará de las alertas e instrucciones durante una emergencia.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  export default Advice;