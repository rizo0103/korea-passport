import type { ReactNode } from "react";

import { Text } from "react-native";
import type { StyleProp, TextStyle } from "react-native";

import { Colors, TypographyTheme } from "@/src/theme";

type TypographyVariant = "h1" | "h2" | "h3" | "title" | "body" | "bodySmall" | "caption" | "button";

type TypographyProps = {
    variant?: TypographyVariant;
    children: ReactNode;
    color?: string;
    align?: "left" | "center" | "right";
    style?: StyleProp < TextStyle >;
};

export const Typography = ({ variant = "body", children, color = Colors.textPrimary, align = "left", style }: TypographyProps) => {
    return (
        <Text style={[
            TypographyTheme[variant],
            { color, textAlign: align },
            style
        ]}>
            {children}
        </Text>
    )
}
