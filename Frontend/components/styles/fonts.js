import React, { useContext } from "react";
import { StyleSheet, Dimensions } from "react-native";

const fonts = (appSettings) =>
  StyleSheet.create({
    h1: {
      color: "foregroundColor".includes(appSettings)
        ? appSettings["foregroundColor"]
        : "#000",
      fontSize: 34,
      fontWeight: "bold",
      textAlign: "center",
      width: "100%",
      margin: 0,
    },

    p: {
      color: "forengroundColor".includes(appSettings)
        ? appSettings["foregroundColor"]
        : "#000",
      fontSize: 12,
      width: "100%",
      textAlign: "center",
      margin: 0,
    },

    inputLabel: {
      color: "forengroundColor".includes(appSettings)
        ? appSettings["foregroundColor"]
        : "#000",
      fontSize: 12,
      width: "100%",
      margin: 0,
    },

    errorLabel: {
      color: "forengroundColor".includes(appSettings)
        ? appSettings["foregroundColor"]
        : "#000",
      width: "100%",
      textAlign: "center",
      color: "white",
      marginTop: "10%",
    },
  });

export default fonts;
