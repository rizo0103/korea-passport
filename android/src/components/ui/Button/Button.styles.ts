import { StyleSheet } from "react-native";

import {
    Colors,
    Radius,
    Spacing,
} from "@/src/theme";

export const styles = StyleSheet.create({
    wrapper: {
        marginHorizontal: Spacing.md,
    },

    button: {
        minHeight: 52,

        paddingVertical: 13,
        paddingHorizontal: 20,

        borderRadius: Radius.lg,

        alignItems: "center",
        justifyContent: "center",

        backgroundColor: Colors.primary,

        // Thick comic outline
        borderWidth: 3,
        borderColor: "#0A0A0A",

        // Hard comic shadow
        shadowColor: "#000000",
        shadowOffset: {
            width: 4,
            height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 0,

        elevation: 5,

        overflow: "hidden",
    },

    highlight: {
        position: "absolute",

        top: 3,
        left: 8,
        right: 8,

        height: 3,

        borderRadius: Radius.full,

        backgroundColor: "rgba(255,255,255,0.16)",
    },
});