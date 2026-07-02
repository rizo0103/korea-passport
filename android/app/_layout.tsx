import 'react-native-reanimated';

import { AuthProvider } from '@/src/contexts/AuthContext';
import RootNavigator from '@/src/navigation/RootNavigator';

export const unstable_settings = {
    anchor: '(tabs)',
};

export default function RootLayout() {

    return (
        <AuthProvider>
            <RootNavigator />
        </AuthProvider>
    );
}
