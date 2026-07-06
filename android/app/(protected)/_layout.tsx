import { useAuth } from "@/src/contexts/AuthContext";
import { Colors } from "@/src/theme/colors";
import { Redirect, Stack } from "expo-router";

export default function ProtectedLayout() {
    const { user, loading } = useAuth();

    if (loading) return null;

    if (!user) {
        return <Redirect href={"/(public)/welcome"} />;
    }

    return (
        <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: Colors.background } }} />
    );
}
