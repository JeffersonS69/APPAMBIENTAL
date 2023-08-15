import React, { useContext } from "react";
import { StyleSheet, Dimensions } from "react-native";


const containers = (appSettings) => StyleSheet.create({
    
    outerPage: {
        backgroundColor: ('backgroundColor'.includes(appSettings) ) ? appSettings['backgroundColor']: "#008080",
        color: ('foregroundColor'.includes(appSettings))? appSettings['foregroundColor']: "#008080",
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        margin: 0,
    },

    formBox: {
        width: "60%",
        height: "70%",
        backgroundColor: "#729aa6",
        margin: 2,
        borderRadius: 15,
        padding: "6%",
    },

    ladingButtonContainer:{
        width: "60%",
        padding: "6%",
        margin: 0,
    },

    keyboardAwareInnerContainer:{
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        alignItems: "center",
        justifyContent: "center",
    }

});

export default containers;

