import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

import { useEffect } from "react";
import { View, StyleSheet } from "react-native";

import { Typography } from "../Typography";
import { Colors } from "@/src/theme";

type ProgressBarProps = {
    progress?: number;

    current?: number;
    max?: number;

    height?: number;

    showLabel?: boolean;
    label?: string;

    animated?: boolean;

    backgroundColor?: string;
    progressColor?: string;
};

export const ProgressBar = ({
    progress,
    current,
    max,
    height = 12,
    showLabel = true,
    label,
    animated = true,
    backgroundColor = Colors.border,
    progressColor = Colors.primary,
}: ProgressBarProps) => {

    const value =
        progress ??
        ((current !== undefined && max !== undefined)
            ? current / max
            : 0);

    const clamped = Math.max(0, Math.min(value, 1));

    const width = useSharedValue(animated ? 0 : clamped);

    useEffect(() => {
        width.value = animated
            ? withTiming(clamped, {
                duration: 450,
            })
            : clamped;
    }, [clamped, animated, width]);

    const progressStyle = useAnimatedStyle(() => ({
        width: `${width.value * 100}%`,
    }));

    return (
        <View>

            <View
                style={[
                    styles.container,
                    {
                        height,
                        backgroundColor,
                        borderRadius: height / 2,
                    },
                ]}
            >
                <Animated.View
                    style={[
                        styles.progress,
                        progressStyle,
                        {
                            backgroundColor: progressColor,
                            borderRadius: height / 2,
                        },
                    ]}
                />
            </View>

            {showLabel && (
                <Typography
                    variant="caption"
                    style={styles.label}
                >
                    {label ??
                        `${current ?? 0} / ${max ?? 0}`}
                </Typography>
            )}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        overflow: "hidden",
        width: "100%",
    },

    progress: {
        height: "100%",
    },

    label: {
        marginTop: 8,
    },
});