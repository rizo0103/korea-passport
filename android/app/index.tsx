import { useAuth } from "@/src/contexts/AuthContext";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View, Text } from "react-native";

export default function Index() {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (loading) return;

        if (user) {
            router.replace("/(tabs)");
        } else {
            router.replace("/welcome");
        }
    }, [user, loading, router]);

    return (
        <View>
            <Text>Loading...</Text>
        </View>
    );
}