import { useAuth } from "@/src/contexts/AuthContext";
import { Redirect } from "expo-router";

export default function IndexPage() {
    const { user, loading } = useAuth();

    if (loading) return null;

    if (user) {
        return <Redirect href={"/(protected)/(tabs)/home"} />
    }

    return <Redirect href={"/(public)/welcome"} />;
}