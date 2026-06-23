/* eslint-disable react-hooks/exhaustive-deps */
import { Colors } from "@/src/theme";
import { ReactNode, useEffect } from "react";
import { Pressable } from "react-native";
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import { styles } from "./Button.styles";

type ButtonProps = {
    children: ReactNode;
    onPress?: () => void;
    variant?: "primary" | "secondary" | "accent";
    activeOpacity?: number;
    style?: any;
    disabled?: boolean;
}

export const Button = ({ children, onPress, variant = "primary", activeOpacity = 0.7, style, disabled = false }: ButtonProps) => {
    const pressed = useSharedValue(0);
    const disabledValue = useSharedValue(disabled ? 1 : 0);

    const backgroundColors = {
        primary: Colors.primary,
        secondary: Colors.surfaceSecondary,
        accent: Colors.accent,
    }, backgroundColor = backgroundColors[variant];

    const animatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(
                disabledValue.value,
                [0, 1],
                [backgroundColor, Colors.disabled]
            ),

            transform: [
                {
                    scale: withSpring(
                        pressed.value ? 0.97 : 1
                    )
                }
            ]
        };
    });

    useEffect(() => {
        disabledValue.value = withTiming(
            disabled ? 1 : 0,
            { duration: 250 }
        );
    }, [disabled]);

    return (
        <Pressable
            onPress={onPress}
            onPressIn={() => {
                pressed.value = 1;
            }}
            onPressOut={() => {
                pressed.value = 0;
            }}
            disabled={disabled}
        >
            <Animated.View
                style={[
                    styles.button,
                    style,
                    animatedStyle
                ]}
            >
                {children}
            {/* <Typography variant="body"> {children} </Typography> */}
            </Animated.View>

        </Pressable>
    );
}
