import { Alert, TextInput, useWindowDimensions, View } from "react-native";
import { useMemo, useRef, useState } from "react";
import Animated, {
    FadeInDown,
    FadeInUp,
} from "react-native-reanimated";

import { Avatar } from "@/src/components/ui/Avatar";
import { Button } from "@/src/components/ui/Button";
import { Card } from "@/src/components/ui/Card";
import { Input } from "@/src/components/ui/Input";
import { Typography } from "@/src/components/ui/Typography";

import { useAuth } from "@/src/contexts/AuthContext";

import { getAvatarColor } from "@/src/services/avatarColors";
import { pickImage } from "@/src/services/imagePicker";

import { Colors, Spacing } from "@/src/theme";
import { isFormValid } from "@/src/utils";

type RegisterProps = {
    onSwitch: () => void;
};

type AvatarData = {
    uri: string;
    name: string;
};

type FormValues = {
    fullName: string;
    email: string;
    username: string;
    password: string;
};

const fields = [
    {
        id: "fullName" as const,
        label: "Full Name",
        placeholder: "Enter your full name",
        returnKey: "next" as const,
        autoCapitalize: "words" as const,
    },
    {
        id: "email" as const,
        label: "Email",
        placeholder: "Enter your email",
        returnKey: "next" as const,
        keyboardType: "email-address" as const,
        autoCapitalize: "none" as const,
    },
    {
        id: "username" as const,
        label: "Username",
        placeholder: "Create a username",
        returnKey: "next" as const,
        autoCapitalize: "none" as const,
    },
    {
        id: "password" as const,
        label: "Password",
        placeholder: "Create a password",
        returnKey: "done" as const,
        secureTextEntry: true,
        autoCapitalize: "none" as const,
    },
];

const initialForm: FormValues = {
    fullName: "",
    email: "",
    username: "",
    password: "",
};

export const Register = ({ onSwitch }: RegisterProps) => {
    const { width, height } = useWindowDimensions();
    const { register } = useAuth();

    const isVerySmallPhone = height < 640;
    const isSmallPhone = height < 700;
    const isTablet = width >= 768;

    const [inputVals, setInputVals] = useState<FormValues>(initialForm);
    const [initials, setInitials] = useState("?");
    const [avatar, setAvatar] = useState<AvatarData | null>(null);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const refs = useRef<(TextInput | null)[]>([]);

    const formValid = useMemo(() => {
        return isFormValid(
            [
                inputVals.fullName,
                inputVals.email,
                inputVals.username,
                inputVals.password,
            ],
            []
        );
    }, [
        inputVals.fullName,
        inputVals.email,
        inputVals.username,
        inputVals.password,
    ]);

    const cardPadding = isTablet
        ? Spacing.xl
        : isVerySmallPhone
            ? Spacing.sm
            : isSmallPhone
                ? Spacing.md
                : Spacing.lg;

    const fieldGap = isVerySmallPhone
        ? Spacing.xs
        : isSmallPhone
            ? Spacing.sm
            : Spacing.md;

    const avatarSize = isVerySmallPhone
        ? 66
        : isSmallPhone
            ? 72
            : isTablet
                ? 96
                : 84;

    const titleVariant = isVerySmallPhone ? "h3" : "h2";

    const updateField = (
        field: keyof FormValues,
        value: string
    ) => {
        setInputVals((prev) => ({
            ...prev,
            [field]: value,
        }));

        if (field === "fullName") {
            const parts = value
                .trim()
                .split(/\s+/)
                .filter(Boolean);

            const nextInitials = parts
                .slice(0, 2)
                .map((part) => part[0]?.toUpperCase())
                .join("");

            setInitials(nextInitials || "?");
        }
    };

    const focusNext = (index: number) => {
        if (index + 1 < fields.length) {
            refs.current[index + 1]?.focus();
            return;
        }

        handleSubmit();
    };

    const handlePickAvatar = async () => {
        if (loading) return;

        const image = await pickImage();

        if (!image) return;

        setAvatar({
            uri: image.uri,
            name: `${inputVals.username || "user"}-avatar.jpg`,
        });
    };

    const handleSubmit = async () => {
        if (!formValid || loading) {
            setSubmitted(true);
            return;
        }

        try {
            setLoading(true);
            setSubmitted(true);

            await register({
                ...inputVals,
                avatar,
            });
        } catch (error: any) {
            Alert.alert(
                "Registration failed",
                error?.message || "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card
            variant="glass"
            style={{
                width: "100%",
                maxWidth: isTablet ? 560 : undefined,
                alignSelf: "center",
                padding: cardPadding,
                borderWidth: 1,
                borderColor: "rgba(255,255,255,0.16)",
            }}
        >
            {/* Header */}

            <Animated.View
                entering={FadeInDown
                    .duration(500)
                    .springify()
                }
            >
                <Typography
                    variant={titleVariant}
                    align="center"
                >
                    Create your passport
                </Typography>

                {!isVerySmallPhone && (
                    <Typography
                        variant="caption"
                        color={Colors.textSecondary}
                        align="center"
                        style={{
                            marginTop: Spacing.xs,
                        }}
                    >
                        Start your Korean Passport journey
                    </Typography>
                )}
            </Animated.View>

            {/* Avatar */}

            <Animated.View
                entering={FadeInDown
                    .duration(500)
                    .delay(120)
                    .springify()
                }
                style={{
                    alignItems: "center",
                    marginTop: isVerySmallPhone
                        ? Spacing.sm
                        : Spacing.md,
                    marginBottom: isVerySmallPhone
                        ? Spacing.sm
                        : Spacing.md,
                }}
            >
                <Avatar
                    size={avatarSize}
                    color={getAvatarColor(inputVals.fullName)}
                    editable
                    initials={initials}
                    onPress={handlePickAvatar}
                    source={
                        avatar
                            ? {
                                uri: avatar.uri,
                            }
                            : undefined
                    }
                />

                <Typography
                    variant="caption"
                    color={Colors.textSecondary}
                    align="center"
                    style={{
                        marginTop: Spacing.xs,
                    }}
                >
                    {avatar
                        ? "Profile picture selected"
                        : "Tap to choose a profile picture"}
                </Typography>
            </Animated.View>

            {/* Fields */}

            <View style={{ gap: fieldGap }}>
                {fields.map((field, index) => (
                    <Animated.View
                        key={field.id}
                        entering={FadeInUp
                            .duration(450)
                            .delay(180 + index * 70)
                            .springify()
                        }
                    >
                        <Input
                            id={field.id}
                            ref={(el) => {
                                refs.current[index] = el;
                            }}
                            label={field.label}
                            placeholder={field.placeholder}
                            returnKeyType={field.returnKey}
                            keyboardType={field.keyboardType}
                            autoCapitalize={field.autoCapitalize}
                            secureTextEntry={field.secureTextEntry}
                            onSubmitEditing={() => focusNext(index)}
                            value={inputVals[field.id]}
                            error={
                                submitted && !inputVals[field.id].trim()
                                    ? `${field.label} is required`
                                    : undefined
                            }
                            onChangeText={(text) =>
                                updateField(field.id, text)
                            }
                        />
                    </Animated.View>
                ))}
            </View>

            {/* Submit */}

            <Animated.View
                entering={FadeInUp
                    .duration(500)
                    .delay(500)
                    .springify()
                }
            >
                <Button
                    disabled={!formValid || loading}
                    variant="primary"
                    style={{
                        marginTop: isVerySmallPhone
                            ? Spacing.md
                            : Spacing.lg,
                    }}
                    onPress={handleSubmit}
                >
                    <Typography>
                        {loading
                            ? "Creating Account..."
                            : "Start Journey"}
                    </Typography>
                </Button>
            </Animated.View>

            {/* Switch */}

            <Animated.View
                entering={FadeInUp
                    .duration(450)
                    .delay(600)
                }
            >
                <Typography
                    onPress={onSwitch}
                    variant="caption"
                    align="center"
                    style={{
                        marginTop: Spacing.sm,
                    }}
                >
                    Already have an account?{" "}

                    <Typography
                        variant="caption"
                        color={Colors.primaryLight}
                        style={{
                            textDecorationLine: "underline",
                        }}
                    >
                        Sign In
                    </Typography>
                </Typography>
            </Animated.View>
        </Card>
    );
};