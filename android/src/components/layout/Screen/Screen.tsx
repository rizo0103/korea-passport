import { ReactNode } from "react";

import {
    ImageBackground,
    ImageSourcePropType,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    View,
    StyleProp,
    ViewStyle,
    StyleSheet,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Colors } from "@/src/theme";
import { PassportBackground } from "@/src/components/layout/backgrounds/PassportBackground";

type ScreenProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    scrollable?: boolean;
    background?: ImageSourcePropType;
    svgBackground?: boolean;
};

export const Screen = ({
    children,
    style,
    scrollable = false,
    background,
    svgBackground = false,
}: ScreenProps) => {
    const content = scrollable ? (
        <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{
                flexGrow: 1,
            }}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode={
                Platform.OS === "ios"
                    ? "interactive"
                    : "on-drag"
            }
            showsVerticalScrollIndicator={false}
        >
            {children}
        </ScrollView>
    ) : (
        <View style={{ flex: 1 }}>
            {children}
        </View>
    );

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: Colors.background,
            }}
            edges={["left", "right"]}
        >
            <KeyboardAvoidingView
                style={{
                    flex: 1,
                }}
                behavior={
                    Platform.OS === "ios"
                        ? "padding"
                        : "height"
                }
                keyboardVerticalOffset={
                    Platform.OS === "ios"
                        ? 0
                        : 20
                }
            >
                <View
                    style={{
                        flex: 1,
                    }}
                >
                    {/* SVG background */}
                    {svgBackground && <PassportBackground />}

                    {/* Image background */}
                    {background && (
                        <ImageBackground
                            source={background}
                            style={{
                                ...StyleSheet.absoluteFillObject,
                            }}
                            resizeMode="cover"
                        />
                    )}

                    {/* Content */}
                    <View
                        style={[
                            {
                                flex: 1,
                            },
                            style,
                        ]}
                    >
                        {content}
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};