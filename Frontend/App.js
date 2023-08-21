import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "react-query";
import { Context, Provider } from "./components/globalContext/globalContext.js";
import Navigator from "./components/navigation/navigator.js";
import { View } from "react-native";

function App(props) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <View style={{ flex: 1 }}>
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </View>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
