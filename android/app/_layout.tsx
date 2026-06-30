import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { Colors } from '@/src/theme';
import { AuthProvider } from '@/src/contexts/AuthContext';

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
            <ThemeProvider value={NavigationTheme}>
                <Stack screenOptions={{
                    contentStyle: {
                        backgroundColor: Colors.background,
                    },
                    headerShown: false,
                }}>
                    <Stack.Screen name="index" />
                    <Stack.Screen name='auth' />
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
                </Stack>
                <StatusBar style="auto" />
            </ThemeProvider>
        </AuthProvider>
    );
}
