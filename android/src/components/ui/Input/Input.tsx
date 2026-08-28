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

        return (
            <View
                style={{
                    gap: Spacing.xs,
                }}
            >
                {/* Label */}

                {label && (
                    <Typography
                        variant="caption"
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

                {/* Input */}

                <View
                    style={{
                        borderRadius: Radius.md,

                        borderWidth: 1,

                        borderColor: error
                            ? Colors.error
                            : focused
                                ? Colors.primaryLight
                                : "rgba(255,255,255,0.08)",

                        backgroundColor: focused
                            ? "rgba(255,255,255,0.055)"
                            : "rgba(255,255,255,0.035)",

                        shadowOpacity: focused ? 0.12 : 0,
                        shadowRadius: 10,
                        shadowOffset: {
                            width: 0,
                            height: 0,
                        },
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

                                fontSize: 15,

                                includeFontPadding: false,
                            },
                            style,
                        ]}
                    />
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