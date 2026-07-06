import { Colors } from "@/src/theme";
import { Stack } from "expo-router";

export default function TabLayout() {
    return (
        <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: Colors.background } }}>
            <Stack.Screen name="home" />
        </Stack>
    )
}