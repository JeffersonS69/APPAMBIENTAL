import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { Center, Image, NativeBaseProvider } from "native-base";



function Tidings({ navigation }) {
  return (
    <NativeBaseProvider>
    <View>
      <View >
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

      <View >
        {/* Option 1 */}
        <TouchableOpacity  onPress={() => navigation.navigate("Preparing")}>
          <Image alt="logo"
            size={150}
            borderRadius={30}
            source={{
              uri: "https://i.ibb.co/W22nPQz/preparate-desastre-natural.png",}}  />
          <Text >Prepárate para un desastre natural</Text>
        </TouchableOpacity>

        {/* Option 2 */}
        <TouchableOpacity  
        onPress={() => navigation.navigate("warnings")}>
        <Image alt="logo"
            size={150}
            borderRadius={30}
            source={{
              uri: "https://i.ibb.co/3C9cQ95/alertas-desastres.png",}}  />
          <Text >Alertas de desastres</Text>
        </TouchableOpacity>
      </View>

      <View >
        {/* Option 3 */}
        <TouchableOpacity  onPress={() => navigation.navigate("view")}>
        <Image alt="logo"
            size={150}
            borderRadius={30}
            source={{
              uri: "https://i.ibb.co/RCNwsqw/ver-desastres-recientes.png",}}  />
          <Text >Ver desastres recientes</Text>
        </TouchableOpacity>

        {/* Option 4 */}
        <TouchableOpacity  onPress={() => navigation.navigate("Recovery")}>
        <Image alt="logo"
            size={150}
            borderRadius={30}
            source={{
              uri: "https://i.ibb.co/ncZhwqs/recuperarse-desatres-naturales.png",}} />
          <Text>Recuperarse de un desastre natural</Text>
        </TouchableOpacity>
      </View>
    </View>
    </NativeBaseProvider>
  );
}

export default Tidings;