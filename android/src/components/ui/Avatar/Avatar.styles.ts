import { Colors } from "@/src/theme";
import { StyleSheet } from "react-native";

export const createStyles = (
    size: number,
    color: string
) =>
    StyleSheet.create({
        wrapper: {
            width: size + 8,
            height: size + 8,
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
        },

        shadow: {
            width: size,
            height: size,
            borderRadius: size / 2,

            backgroundColor: "#0A0A0A",

            transform: [
                {
                    translateX: 3,
                },
                {
                    translateY: 4,
                },
            ],
        },

        container: {
            position: "absolute",

            width: size,
            height: size,

            borderRadius: size / 2,

            borderWidth: 3,
            borderColor: "#0A0A0A",

            backgroundColor: color,

            justifyContent: "center",
            alignItems: "center",

            overflow: "hidden",
        },

        image: {
            width: "100%",
            height: "100%",
        },

        /*
         * Subtle comic-style shine.
         * It doesn't overpower the avatar itself.
         */
        highlight: {
            position: "absolute",

            width: size * 0.65,
            height: size * 0.25,

            top: size * 0.08,
            left: size * 0.08,

            borderRadius: size,

            backgroundColor: "rgba(255,255,255,0.12)",

            transform: [
                {
                    rotate: "-25deg",
                },
            ],
        },

        shine: {
            position: "absolute",

            width: size * 0.18,
            height: size * 0.18,

            top: size * 0.16,
            right: size * 0.2,

            borderRadius: size,

            backgroundColor: "rgba(255,255,255,0.18)",
        },

        pressed: {
            transform: [
                {
                    translateX: 2,
                },
                {
                    translateY: 2,
                },
            ],
        },

        onlineWrapper: {
            position: "absolute",

            right: -1,
            bottom: -1,

            width: size * 0.28,
            height: size * 0.28,

            borderRadius: size,

            backgroundColor: "#0A0A0A",

            justifyContent: "center",
            alignItems: "center",
        },

        onlineDot: {
            width: size * 0.17,
            height: size * 0.17,

            borderRadius: size,

            backgroundColor: Colors.success,

            borderWidth: 1.5,
            borderColor: Colors.success,
        },

        editBadge: {
            position: "absolute",

            right: -2,
            bottom: -2,

            width: size * 0.3,
            height: size * 0.3,

            minWidth: 22,
            minHeight: 22,

            borderRadius: size,

            backgroundColor: Colors.primary,

            borderWidth: 2,
            borderColor: "#0A0A0A",

            justifyContent: "center",
            alignItems: "center",

            shadowColor: "#0A0A0A",
            shadowOffset: {
                width: 2,
                height: 2,
            },
            shadowOpacity: 1,
            shadowRadius: 0,

            elevation: 3,
        },
    });