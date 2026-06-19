// app's shadow values;

import { ViewStyle } from "react-native";

export const Shadows = {
    "none": {},

    "sm": {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 3,
        shadowOpacity: 0.15,
        elevation: 2
    },

    "md": {
        shadowColor: "#000",
        shadowOffset: { 
            width: 0, 
            height: 3 
        },
        shadowRadius: 5,
        shadowOpacity: 0.2,
        elevation: 5
    },
    "lg": {
        shadowColor: "#000",
        shadowOffset: { 
            width: 0, 
            height: 6 
        },
        shadowRadius: 10,
        shadowOpacity: 0.25,
        elevation: 8
    },
} satisfies Record < string, ViewStyle >;
