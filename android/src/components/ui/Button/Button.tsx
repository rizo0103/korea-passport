/* eslint-disable react-hooks/exhaustive-deps */
import { Colors } from "@/src/theme";
import { ReactNode, useEffect } from "react";
import { Pressable } from "react-native";

import Animated, {
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from "react-native-reanimated";

import { styles } from "./Button.styles";

type ButtonProps = {
    children: ReactNode;
    onPress?: () => void;
    variant?: "primary" | "secondary" | "accent";
    activeOpacity?: number;
    style?: any;
    disabled?: boolean;
};

export const Button = ({
    children,
    onPress,
    variant = "primary",
    activeOpacity = 0.7,
    style,
    disabled = false,
}: ButtonProps) => {
    const pressed = useSharedValue(0);
    const disabledValue = useSharedValue(disabled ? 1 : 0);

    const backgroundColors = {
        primary: Colors.primary,
        secondary: Colors.surfaceSecondary,
        accent: Colors.accent,
    };

    const backgroundColor = backgroundColors[variant];

    const animatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(
                disabledValue.value,
                [0, 1],
                [backgroundColor, Colors.disabled]
            ),

            transform: [
                {
                    translateX: withSpring(
                        pressed.value ? 2 : 0,
                        {
                            damping: 18,
                            stiffness: 250,
                        }
                    ),
                },
                {
                    translateY: withSpring(
                        pressed.value ? 3 : 0,
                        {
                            damping: 18,
                            stiffness: 250,
                        }
                    ),
                },
            ],
        };
    });

    useEffect(() => {
        disabledValue.value = withTiming(
            disabled ? 1 : 0,
            {
                duration: 250,
            }
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
            style={({ pressed: isPressed }) => [
                styles.wrapper,
                isPressed && {
                    opacity: activeOpacity,
                },
            ]}
        >
            <Animated.View
                style={[
                    styles.button,
                    style,
                    animatedStyle,
                ]}
            >
                {children}

                {/* Comic-book highlight */}
                <Animated.View
                    pointerEvents="none"
                    style={styles.highlight}
                />
            </Animated.View>
        </Pressable>
    );
};