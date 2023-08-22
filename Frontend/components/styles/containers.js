import React, { useContext } from "react";
import { StyleSheet, Dimensions } from "react-native";

const containers = (appSettings) =>
  StyleSheet.create({
    outerPage: {
      backgroundColor: "backgroundColor".includes(appSettings)
        ? appSettings["backgroundColor"]
        : "#FFF",
      color: "foregroundColor".includes(appSettings)
        ? appSettings["foregroundColor"]
        : "#FFF",
      height: Dimensions.get("window").height,
      width: Dimensions.get("window").width,
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      margin: 0,
    },

    outerPagePP: {
      color: "foregroundColor".includes(appSettings)
        ? appSettings["foregroundColor"]
        : "#FFF",
      height: Dimensions.get("window").height,
      width: Dimensions.get("window").width,
      alignItems: "center",
      justifyContent: "center",
    },

    formBox: {
      width: "80%",
      height: "80%",
      margin: 2,
      borderRadius: 15,
      padding: "4%",
    },

    ladingButtonContainer: {
      width: "60%",
      padding: "6%",
      margin: 0,
    },

    keyboardAwareInnerContainer: {
      height: Dimensions.get("window").height,
      width: Dimensions.get("window").width,
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default containers;
