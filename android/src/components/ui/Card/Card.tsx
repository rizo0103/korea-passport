import { Colors, Radius, Shadows, Spacing } from "@/src/theme";
import { ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { BlurView } from "expo-blur";

type CardProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    shadow?: "none" | "sm" | "md" | "lg";
    variant?: "default" | "glass";
};

const baseStyle: ViewStyle = {
    borderRadius: Radius.md,
    borderWidth: 1,
    padding: Spacing.md,
    overflow: "hidden",
    margin: Spacing.md,
    gap: Spacing.lg,
};

export const Card = ({
    children,
    style,
    shadow = "none",
    variant = "default",
}: CardProps) => {
    if (variant === "glass") {
        return (
            <BlurView
                intensity={35}
                tint="dark"
                style={[
                    baseStyle,
                    {
                        backgroundColor: "rgba(30, 30, 30, 0.25)",
                        borderColor: "rgba(255,255,255,0.08)",
                    },
                    Shadows[shadow],
                    style,
                ]}
            >
                {children}
            </BlurView>
        );
    }

    return (
        <View
            style={[
                baseStyle,
                {
                    backgroundColor: Colors.surface,
                    borderColor: Colors.border,
                },
                Shadows[shadow],
                style,
            ]}
        >
            {children}
        </View>
    );
};