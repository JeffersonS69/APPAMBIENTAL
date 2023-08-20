import React, { useContext } from "react";
import { StyleSheet, Dimensions } from "react-native";


const buttons = (appSettings) => StyleSheet.create({
    
    login:{
      width: "100%",
      height: 55,
      backgroundColor: "#2F3370",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 25,
    },
    register:{
      height: 55,
      backgroundColor: "#2F3370",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 25,
    }

});

export default buttons;

