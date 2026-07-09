import 'react-native-reanimated';

import { AuthProvider } from '@/src/contexts/AuthContext';
import { Stack } from 'expo-router';
import { Colors } from '@/src/theme';

export default function RootLayout() {

    return (
        <AuthProvider>
            <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: Colors.background } }}>
                <Stack.Screen name="index" />
            </Stack>
        </AuthProvider>
    );
}
