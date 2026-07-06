import { useAuth } from "@/src/contexts/AuthContext";
import { Colors } from "@/src/theme/colors";
import { Redirect, Stack } from "expo-router";

export default function PublicLayout() {
    const { user } = useAuth();

    if (user) {
        return <Redirect href={"/(protected)/(tabs)/home"} />;
    }
    
    return (
        <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: Colors.background } }} />
    );
}
