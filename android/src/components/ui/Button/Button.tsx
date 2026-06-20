import { Colors } from "@/src/theme";
import { ReactNode } from "react";
import { Text, TouchableOpacity } from "react-native";

type ButtonProps = {
    children: ReactNode;
    onPress?: () => void;
    variant?: "primary" | "secondary" | "accent";
    activeOpacity?: number;
    style?: any;
}

export const Button = ({children, onPress, variant = "primary", activeOpacity = 0.7, style} : ButtonProps) => {
    const getBackground = () => {
        switch (variant) {
            case "secondary":
                return Colors.surfaceSecondary;
            case "accent":
                return Colors.accent;
            default:
                return Colors.primary;
        }
    }
    
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity} style={[
            {
                backgroundColor: getBackground(),
                paddingVertical: 12,
                paddingHorizontal: 16,
                borderRadius: 8,
                alignItems: "center",
            },
            style
        ]}>
            <Text style={{ color: "#fff", fontWeight: "600" }}> {children} </Text>
        </TouchableOpacity>
    );
}
