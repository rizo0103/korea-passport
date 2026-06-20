import { Colors, Radius, Shadows, Spacing } from "@/src/theme";
import { ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";

type CardProps = {
    children: ReactNode;
    style?: StyleProp < ViewStyle >;
    shadow?: "none" | "sm" | "md" | "lg";
};

export const Card = ({ children, style, shadow="none" }: CardProps) => {
    return (
        <View style={[
            {
                backgroundColor: Colors.surface,
                borderRadius: Radius.md,
                borderWidth: 1,
                padding: Spacing.md,
                overflow: "hidden",
                margin: Spacing.md,
                gap: Spacing.lg,
            },
            Shadows[shadow],
            style
        ]}>
            {children}
        </View>
    );
}
