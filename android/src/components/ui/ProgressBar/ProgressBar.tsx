/* eslint-disable react-hooks/exhaustive-deps */
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
    height = 14,
    showLabel = true,
    label,
    animated = true,
    backgroundColor = Colors.surfaceSecondary,
    progressColor = Colors.primary,
}: ProgressBarProps) => {
    const value =
        progress ??
        (current !== undefined && max !== undefined
            ? current / max
            : 0);

    const clamped = Math.max(0, Math.min(value, 1));

    const width = useSharedValue(animated ? 0 : clamped);

    useEffect(() => {
        width.value = animated
            ? withTiming(clamped, {
                  duration: 550,
              })
            : clamped;
    }, [clamped, animated]);

    const progressStyle = useAnimatedStyle(() => ({
        width: `${width.value * 100}%`,
    }));

    return (
        <View style={styles.wrapper}>
            {/* Comic progress container */}
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
                {/* Main progress */}
                <Animated.View
                    style={[
                        styles.progress,
                        progressStyle,
                        {
                            backgroundColor: progressColor,
                            borderRadius: height / 2,
                        },
                    ]}
                >
                    {/* Comic highlight */}
                    <View style={styles.highlight} />

                    {/* Comic shine */}
                    <View style={styles.shine} />
                </Animated.View>
            </View>

            {showLabel && (
                <View style={styles.labelRow}>
                    <View style={styles.labelBadge}>
                        <Typography
                            variant="caption"
                            style={styles.label}
                        >
                            {label ??
                                `${current ?? 0} / ${max ?? 0}`}
                        </Typography>
                    </View>

                    {current !== undefined &&
                        max !== undefined && (
                            <Typography
                                variant="caption"
                                style={[
                                    styles.percent,
                                    {
                                        color: progressColor,
                                    },
                                ]}
                            >
                                {Math.round(clamped * 100)}%
                            </Typography>
                        )}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
    },

    container: {
        width: "100%",
        overflow: "hidden",

        // Comic-book outline
        borderWidth: 2.5,
        borderColor: "#0A0A0A",

        // Slightly cartoonish shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 3,
        },
        shadowOpacity: 0.45,
        shadowRadius: 0,

        elevation: 3,
    },

    progress: {
        height: "100%",
        minWidth: 6,
        overflow: "hidden",
        position: "relative",

        // Small dark comic outline
        borderRightWidth: 2,
        borderRightColor: "#0A0A0A",
    },

    /*
     * Large comic highlight
     */
    highlight: {
        position: "absolute",
        top: 2,
        left: 8,
        right: 8,
        height: 3,

        backgroundColor: "rgba(255,255,255,0.28)",
        borderRadius: 10,
    },

    /*
     * Small white comic shine
     */
    shine: {
        position: "absolute",
        top: 3,
        left: 14,
        width: 4,
        height: 4,

        backgroundColor: "rgba(255,255,255,0.65)",
        borderRadius: 4,
    },

    labelRow: {
        marginTop: 8,

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    /*
     * Small comic speech-bubble-like badge
     */
    labelBadge: {
        paddingHorizontal: 8,
        paddingVertical: 3,

        backgroundColor: Colors.surface,

        borderWidth: 2,
        borderColor: "#0A0A0A",
        borderRadius: 7,

        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 0,

        elevation: 2,
    },

    label: {
        fontWeight: "700",
    },

    percent: {
        fontWeight: "900",
    },
});