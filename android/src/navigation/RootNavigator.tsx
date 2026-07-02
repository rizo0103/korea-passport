import { Stack } from 'expo-router';
import 'react-native-reanimated';

import { Colors } from '@/src/theme';
import { Screen } from '@/src/components/layout/Screen';
import { useAuth } from '../contexts/AuthContext';

export const unstable_settings = {
    anchor: '(tabs)',
};

export default function RootNavigator() {
    const { user, loading } = useAuth();

    if (loading) {
        return null;
    }

    return (
        <Screen style={{ flex: 1, backgroundColor: Colors.background, margin: 0, padding: 0 }} scrollable>
            <Stack>
                {!user ? (
                    <>
                        <Stack.Screen name="index" />
                        <Stack.Screen name="auth" />
                    </>
                ) : (
                    <Stack.Screen name="(tabs)" />
                )}
            </Stack>
        </Screen>
    );
}
