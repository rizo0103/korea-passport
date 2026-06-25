import { Screen } from "@/src/components/layout/Screen";
import { LogoSection } from "./components/LogoSection";
import { ActionSection } from "./components/ActionSection";
import { router } from "expo-router";
import { Spacing } from "@/src/theme";
import { FeaturesSection } from "./components/FeaturesSection";

export const WelcomeScreen = () => {
    return (
        <Screen style={{ gap: Spacing["2xl"] }} scrollable={true}>
            <LogoSection />
            <FeaturesSection />
            <ActionSection
                onStart={() => router.push("/")} 
                onSignIn={() => router.push("/")} 
            />
        </Screen>
    );
}
