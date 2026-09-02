import { ReactNode } from "react";

import {
    StyleProp,
    View,
    ViewStyle,
} from "react-native";

import { BlurView } from "expo-blur";

import {
    Colors,
    Radius,
    Spacing,
} from "@/src/theme";

type CardProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    shadow?: "none" | "sm" | "md" | "lg";
    variant?: "default" | "glass";
};

const baseStyle: ViewStyle = {
    borderRadius: Radius.lg,
    borderWidth: 3,
    padding: Spacing.md,
    overflow: "hidden",
    margin: Spacing.md,
    gap: Spacing.lg,
};

const comicShadow = {
    none: {
        shadowOffset: {
            width: 0,
            height: 0,
        },
        elevation: 0,
    },

    sm: {
        shadowOffset: {
            width: 3,
            height: 4,
        },
        elevation: 2,
    },

    md: {
        shadowOffset: {
            width: 4,
            height: 5,
        },
        elevation: 3,
    },

    lg: {
        shadowOffset: {
            width: 5,
            height: 7,
        },
        elevation: 4,
    },
};

export const Card = ({
    children,
    style,
    shadow = "md",
    variant = "default",
}: CardProps) => {
    const shadowStyle = comicShadow[shadow];

    if (variant === "glass") {
        return (
            <View
                style={[
                    {
                        borderRadius: Radius.lg,
                        margin: Spacing.md,
                        position: "relative",
                    },
                ]}
            >
                <BlurView
                    intensity={35}
                    tint="dark"
                    style={[
                        baseStyle,

                        {
                            backgroundColor:
                                "rgba(30, 30, 30, 0.55)",

                            borderColor:
                                "#0A0A0A",
                        },

                        style,
                    ]}
                >
                    {children}

                    {/* Comic highlight */}
                    <View
                        pointerEvents="none"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 2,
                            backgroundColor:
                                "rgba(255,255,255,0.10)",
                        }}
                    />
                </BlurView>
            </View>
        );
    }

    return (
        <View
            style={[
                baseStyle,

                {
                    backgroundColor: Colors.surface,
                    borderColor: "#0A0A0A",

                    shadowColor: "#000000",
                    shadowOpacity: shadow === "none" ? 0 : 1,
                    shadowRadius: 0,

                    ...shadowStyle,
                },

                style,
            ]}
        >
            {children}

            {/* Comic highlight */}
            <View
                pointerEvents="none"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    backgroundColor:
                        "rgba(255,255,255,0.08)",
                }}
            />
        </View>
    );
};