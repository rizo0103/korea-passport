import "react-native-reanimated";

import { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { AuthProvider } from "@/src/contexts/AuthContext";
import { Colors } from "@/src/theme";

// Не скрываем Splash Screen,
// пока шрифты не загрузились
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontsLoaded, fontError] = useFonts({
        "Jua-Regular": require("@/assets/fonts/Jua-Regular.ttf"),
        "NotoSansKR-Regular": require(
            "@/assets/fonts/NotoSansKR-Regular.ttf"
        ),
    });

    useEffect(() => {
        if (fontsLoaded || fontError) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    // Пока шрифты загружаются —
    // ничего не рендерим
    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <AuthProvider>
            <Stack
                screenOptions={{
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: Colors.background,
                    },
                }}
            >
                <Stack.Screen name="index" />
            </Stack>
        </AuthProvider>
    );
}