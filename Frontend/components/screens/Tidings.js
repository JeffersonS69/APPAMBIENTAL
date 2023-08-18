import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Context } from "../globalContext/globalContext.js";
import containers from "../styles/containers.js";
import fonts from "../styles/fonts.js";
import buttons from "../styles/buttons.js";
import margins from "../styles/margins.js";
import { banner, logo, optionContainer, option, optionText, optionImage } from "../styles/TidingStyles.js";


function Tidings({ navigation }) {
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
      </View>

      <View style={optionContainer}>
        {/* Option 1 */}
        <TouchableOpacity style={option} onPress={() => navigation.navigate("preparing")}>
          <Image alt="logo"
            size={150}
            borderRadius={30}
            source={{
              uri: "https://i.ibb.co/W22nPQz/preparate-desastre-natural.png",}} style={optionImage} />
          <Text style={optionText}>Prepárate para un desastre natural</Text>
        </TouchableOpacity>

        {/* Option 2 */}
        <TouchableOpacity style={option} 
        onPress={() => navigation.navigate("warnings")}>
        <Image alt="logo"
            size={150}
            borderRadius={30}
            source={{
              uri: "https://i.ibb.co/3C9cQ95/alertas-desastres.png",}} style={optionImage} />
          <Text style={optionText}>Alertas de desastres</Text>
        </TouchableOpacity>
      </View>

      <View style={optionContainer}>
        {/* Option 3 */}
        <TouchableOpacity style={[buttons(appSettings).view]} onPress={() => navigation.navigate("view")}>
        <Image alt="logo"
            size={150}
            borderRadius={30}
            source={{
              uri: "https://i.ibb.co/RCNwsqw/ver-desastres-recientes.png",}} style={optionImage} />
          <Text style={optionText}>Ver desastres recientes</Text>
        </TouchableOpacity>

        {/* Option 4 */}
        <TouchableOpacity style={option} onPress={() => navigation.navigate("recovery")}>
        <Image alt="logo"
            size={150}
            borderRadius={30}
            source={{
              uri: "https://i.ibb.co/ncZhwqs/recuperarse-desatres-naturales.png",}} style={optionImage} />
          <Text style={optionText}>Recuperarse de un desastre natural</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Tidings;