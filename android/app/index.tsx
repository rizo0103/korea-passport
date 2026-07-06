import { Screen } from "@/src/components/layout/Screen";
import { Typography } from "@/src/components/ui/Typography";
import { useAuth } from "@/src/contexts/AuthContext";
import { Redirect } from "expo-router";

export default function Index() {
    const { user, loading } = useAuth();

    if (loading) return null;

    if (user) {
        return <Redirect href={"/(protected)/(tabs)/home"} />
    }

    return <Redirect href={"/(public)/welcome"} />;
}