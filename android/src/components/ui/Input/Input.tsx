import { Colors, Radius, Spacing } from "@/src/theme";

import {
    forwardRef,
    useState,
} from "react";

import {
    TextInput,
    TextInputProps,
    View,
} from "react-native";

import { Typography } from "../Typography";

type Props = TextInputProps & {
    label?: string;
    error?: string;
};

export const Input = forwardRef<TextInput, Props>(
    (
        {
            label,
            error,
            style,
            onFocus,
            onBlur,
            ...props
        },
        ref
    ) => {
        const [focused, setFocused] = useState(false);

        const borderColor = error
            ? Colors.error
            : focused
                ? Colors.primaryLight
                : "#0A0A0A";

        return (
            <View
                style={{
                    gap: Spacing.xs,
                }}
            >
                {/* Label */}
                {label && (
                    <Typography
                        color={
                            error
                                ? Colors.error
                                : focused
                                    ? Colors.primaryLight
                                    : Colors.textSecondary
                        }
                        style={{
                            marginLeft: Spacing.xs,
                        }}
                    >
                        {label}
                    </Typography>
                )}

                {/* Input shadow */}
                <View
                    style={{
                        borderRadius: Radius.lg,

                        backgroundColor: "#000000",

                        transform: [
                            {
                                translateX: 3,
                            },
                            {
                                translateY: 4,
                            },
                        ],
                    }}
                >
                    {/* Input */}
                    <View
                        style={{
                            minHeight: 52,

                            borderRadius: Radius.lg,

                            borderWidth: 3,
                            borderColor,

                            backgroundColor: focused
                                ? Colors.surfaceSecondary
                                : Colors.surface,

                            overflow: "hidden",
                        }}
                    >
                        <TextInput
                            ref={ref}
                            {...props}
                            onFocus={(event) => {
                                setFocused(true);
                                onFocus?.(event);
                            }}
                            onBlur={(event) => {
                                setFocused(false);
                                onBlur?.(event);
                            }}
                            selectionColor={Colors.primaryLight}
                            placeholderTextColor={Colors.textSecondary}
                            style={[
                                {
                                    height: 52,

                                    paddingHorizontal: Spacing.md,

                                    color: Colors.textPrimary,

                                    fontFamily: "Jua-Regular",
                                    fontSize: 15,

                                    includeFontPadding: false,
                                },
                                style,
                            ]}
                        />

                        {/* Comic highlight */}
                        <View
                            pointerEvents="none"
                            style={{
                                position: "absolute",

                                top: 3,
                                left: 8,
                                right: 8,

                                height: 2,

                                borderRadius: Radius.full,

                                backgroundColor:
                                    "rgba(255,255,255,0.10)",
                            }}
                        />
                    </View>
                </View>

                {/* Error */}
                {error && (
                    <Typography
                        variant="caption"
                        color={Colors.error}
                        style={{
                            marginLeft: Spacing.xs,
                        }}
                    >
                        {error}
                    </Typography>
                )}
            </View>
        );
    }
);

Input.displayName = "Input";