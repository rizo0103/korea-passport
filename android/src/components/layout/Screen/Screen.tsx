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
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Colors } from "@/src/theme";

type ScreenProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    scrollable?: boolean;
    background?: ImageSourcePropType;
};

export const Screen = ({
    children,
    style,
    scrollable = false,
    background,
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
        <View
            style={{
                flex: 1,
            }}
        >
            {children}
        </View>
    );

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: Colors.background,
            }}
            edges={["left", "right", "bottom"]}
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
                {background ? (
                    <ImageBackground
                        source={background}
                        style={{
                            flex: 1,
                        }}
                        resizeMode="cover"
                    >
                        <View
                            style={{
                                flex: 1,
                                backgroundColor:
                                    "rgba(18,18,18,0.55)",
                            }}
                        >
                            {content}
                        </View>
                    </ImageBackground>
                ) : (
                    content
                )}
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};