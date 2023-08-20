import React, { useContext } from "react";
import { View} from "react-native";

import { Center, Image, NativeBaseProvider, ScrollView } from "native-base";

function Recovery() {
    return (
      <NativeBaseProvider>
        <View>
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
          <Text styles={h1}>¿Qué Hacer despues de un Desastre?</Text>
       
        </View>
      </NativeBaseProvider>
    );
  }
  
  export default Recovery;
  