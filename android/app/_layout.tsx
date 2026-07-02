import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { Colors } from '@/src/theme';
import { AuthProvider } from '@/src/contexts/AuthContext';
import { Screen } from '@/src/components/layout/Screen';

export const unstable_settings = {
    anchor: '(tabs)',
};

const NavigationTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        background: Colors.background,
        card: Colors.background,
        primary: Colors.primary,
        text: Colors.textPrimary,
        border: Colors.border,
    },
};

export default function RootLayout() {

    return (
        <AuthProvider>
            <Screen style={{ flex: 1, backgroundColor: Colors.background, margin: 0, padding: 0 }} scrollable>
                <Stack screenOptions={{
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: Colors.background,
                    },
                    animation: "fade"
                }}>
                    <Stack.Screen name="index" />
                    <Stack.Screen name="welcome" />                
                    <Stack.Screen name='auth' />
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                </Stack>
                <StatusBar style="light" />
            </Screen>
        </AuthProvider>
    );
}
