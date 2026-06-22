import { Colors } from "@/src/theme";
import { StyleSheet } from "react-native";

export const createStyles = (size: number, color: string) =>
    StyleSheet.create({
        container: {
            width: size,
            height: size,
            borderRadius: size / 2,

            borderWidth: 2,
            borderColor: Colors.primary,
            backgroundColor: color,

            justifyContent: "center",
            alignItems: "center",

            overflow: "hidden",
        },
    });