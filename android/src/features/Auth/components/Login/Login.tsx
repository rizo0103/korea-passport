import { useRef, useState } from "react";

import {
    Alert,
    TextInput,
} from "react-native";

import Animated, {
    FadeInDown,
    FadeInUp,
} from "react-native-reanimated";

import { Button } from "@/src/components/ui/Button";
import { Card } from "@/src/components/ui/Card";
import { Input } from "@/src/components/ui/Input";
import { Typography } from "@/src/components/ui/Typography";

import { useAuth } from "@/src/contexts/AuthContext";

import { Colors, Spacing } from "@/src/theme";
import { isFormValid } from "@/src/utils";

type LoginProps = {
    onSwitch: () => void;
};

export const Login = ({ onSwitch }: LoginProps) => {
    const { login } = useAuth();

    const nextInputRef = useRef<TextInput | null>(null);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const formValid = isFormValid(
        [username, password],
        []
    );

    const handleSubmit = async () => {
        if (!formValid || loading) return;

        try {
            setLoading(true);

            await login({
                login: username,
                password,
            });
        } catch (error: any) {
            Alert.alert(
                "Login failed",
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
                margin: 0,
                width: "100%",
                padding: Spacing.lg,
                borderWidth: 1,
                borderColor: "rgba(255,255,255,0.16)",
            }}
        >
            {/* HEADER */}

            <Animated.View
                entering={FadeInDown
                    .duration(500)
                    .springify()
                }
            >
                <Typography
                    align="center"
                    variant="h2"
                >
                    Welcome back
                </Typography>

                <Typography
                    variant="caption"
                    color={Colors.textSecondary}
                    align="center"
                    style={{
                        marginTop: Spacing.xs,
                    }}
                >
                    Continue your Korean Passport journey
                </Typography>
            </Animated.View>

            {/* USERNAME */}

            <Animated.View
                entering={FadeInUp
                    .duration(450)
                    .delay(150)
                    .springify()
                }
                style={{
                    marginTop: Spacing.lg,
                }}
            >
                <Input
                    label="Username"
                    placeholder="Enter your username"
                    submitBehavior="submit"
                    returnKeyType="next"
                    onSubmitEditing={() =>
                        nextInputRef.current?.focus()
                    }
                    onChangeText={setUsername}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </Animated.View>

            {/* PASSWORD */}

            <Animated.View
                entering={FadeInUp
                    .duration(450)
                    .delay(250)
                    .springify()
                }
                style={{
                    marginTop: Spacing.md,
                }}
            >
                <Input
                    label="Password"
                    placeholder="Enter your password"
                    ref={nextInputRef}
                    secureTextEntry
                    returnKeyType="done"
                    onChangeText={setPassword}
                    onSubmitEditing={handleSubmit}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </Animated.View>

            {/* BUTTON */}

            <Animated.View
                entering={FadeInUp
                    .duration(500)
                    .delay(400)
                    .springify()
                }
            >
                <Button
                    disabled={!formValid || loading}
                    variant="primary"
                    style={{
                        marginTop: Spacing.lg,
                    }}
                    onPress={handleSubmit}
                >
                    <Typography variant="body">
                        {loading
                            ? "Signing in..."
                            : "Continue Journey"}
                    </Typography>
                </Button>
            </Animated.View>

            {/* SWITCH */}

            <Animated.View
                entering={FadeInUp
                    .duration(450)
                    .delay(520)
                }
            >
                <Typography
                    variant="caption"
                    align="center"
                    onPress={onSwitch}
                    style={{
                        marginTop: Spacing.sm,
                    }}
                >
                    Don't have an account yet?{" "}

                    <Typography
                        variant="caption"
                        color={Colors.primaryLight}
                        style={{
                            textDecorationLine: "underline",
                        }}
                    >
                        Sign Up
                    </Typography>
                </Typography>
            </Animated.View>
        </Card>
    );
};