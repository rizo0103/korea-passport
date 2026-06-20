import { Colors, Radius, Spacing } from "@/src/theme";
import { useState } from "react";
import { View, TextInput, TextInputProps } from "react-native";
import { Typography } from "../Typography";

type Props = TextInputProps & {
    label?: string;
    error?: string;
}

export const Input = ({ label, error, style, ...props } : Props) => {
    const [ focused, setFocused ] = useState(false);

    return (
        <View style={{ gap: Spacing.sm }}>
            {label && (
                <Typography variant="caption" style={{ opacity: 0.7 }}>
                    {label}
                </Typography>
            )}

            <TextInput 
                {...props} 
                onFocus={e => {
                    setFocused(true);
                    props.onFocus?.(e);
                }} 
                onBlur={e => {
                    setFocused(false);
                    props.onBlur?.(e);
                }}
                style={[
                    {
                        height: 52,
                        borderRadius: Radius.md,
                        paddingHorizontal: Spacing.md,
                        backgroundColor: Colors.background,
                        borderWidth: 1,
                        borderColor: focused
                            ? Colors.primaryLight
                            : Colors.primaryDark,
                        color: Colors.textPrimary
                    },
                    style
                ]}
                placeholderTextColor={Colors.textSecondary}
            />

            {error && (
                <Typography variant="caption" style={{ color: Colors.error }}>
                    {error}
                </Typography>
            )}
        </View>
    )
}
