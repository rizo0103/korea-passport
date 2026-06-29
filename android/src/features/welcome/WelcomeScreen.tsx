import { Screen } from "@/src/components/layout/Screen";
import { LogoSection } from "./components/LogoSection";
import { ActionSection } from "./components/ActionSection";
import { router } from "expo-router";
import { Colors, IconSizes, Spacing } from "@/src/theme";
import { FeaturesSection } from "./components/FeaturesSection";
import { Icon } from "@/src/components/ui/Icon";
import { View } from "react-native";
import { Typography } from "@/src/components/ui/Typography";

export const WelcomeScreen = () => {
    return (
        <Screen
            scrollable
            background={require("@/assets/images/seoul-busan-bg.png")}
            style={{ flex: 1 }}
        >
            <View style={{ flex: 1, justifyContent: "space-between" }}>

                {/* TOP */}
                <View style={{ alignItems: "center", gap: Spacing["2xl"] }}>
                    <LogoSection />

                    <Icon
                        source={require("@/assets/icons/passport.png")}
                        size={IconSizes["3xl"]}
                    />
                </View>

                {/* BOTTOM */}
                <View style={{ gap: Spacing.lg }}>
                    <FeaturesSection />

                    <ActionSection
                        onStart={() => router.push({
                            pathname: "/auth",
                            params: { mode: "register" }
                        })}

                        onSignIn={() => router.push({
                            pathname: "/auth",
                            params: { mode: "login" }
                        })}
                    />
                </View>

                <Typography variant="caption" align="center">
                    By continuing you are agree with{'\n'}
                    <Typography variant="caption" color={Colors.accentLight}>
                        Terms of Service 
                        <Typography variant="caption">and</Typography> 
                        <Typography variant="caption" color={Colors.primaryLight}>Privacy Policy</Typography>
                    </Typography>
                </Typography>
            </View>
        </Screen>
    );
};