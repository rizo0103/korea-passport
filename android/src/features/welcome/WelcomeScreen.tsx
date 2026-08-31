import { Screen } from "@/src/components/layout/Screen";

import { LogoSection } from "./components/LogoSection";
import { ActionSection } from "./components/ActionSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { createWelcomeStyles } from "./WelcomeScreen.styles";

import { router } from "expo-router";

import { Colors, Spacing } from "@/src/theme";
import { Typography } from "@/src/components/ui/Typography";
import { ServerStatus } from "@/src/components/common/ServerStatus";
import { API } from "@/src/config/api";

import Animated, {
    FadeIn,
    FadeInDown,
    FadeInLeft,
    FadeInRight,
} from "react-native-reanimated";

import { useWindowDimensions } from "react-native";

export const WelcomeScreen = () => {
    const { width, height } = useWindowDimensions();

    //* Responsive

    const isSmallPhone = height < 700;
    const isVerySmallPhone = height < 640;
    const isTablet = width >= 768;

    //* Responsive spacing

    const horizontalPadding = isTablet
        ? Spacing["2xl"]
        : Spacing.md;

    const topGap = isVerySmallPhone
        ? Spacing.sm
        : isSmallPhone
            ? Spacing.md
            : isTablet
                ? Spacing.xl
                : Spacing.lg;

    const sectionGap = isVerySmallPhone
        ? Spacing.sm
        : isSmallPhone
            ? Spacing.md
            : isTablet
                ? Spacing.xl
                : Spacing.lg;

    const bottomMargin = isVerySmallPhone
        ? Spacing.sm
        : isSmallPhone
            ? Spacing.md
            : Spacing.lg;

    const contentPaddingVertical = isVerySmallPhone
        ? 2
        : isSmallPhone
            ? Spacing.xs
            : Spacing.sm;

    //* Content width

    const contentWidth = isTablet
        ? Math.min(width * 0.72, 650)
        : "100%";

    //*  Styles

    const styles = createWelcomeStyles({
        horizontalPadding,
        contentWidth,
        contentPaddingVertical,
        topGap,
        sectionGap,
        bottomMargin,
    });

    return (
        <Screen scrollable={false} background={ require("@/assets/images/seoul-busan-bg.png") } style={ styles.screen }>
            <ServerStatus url={`${API.BASE_URL}/health`} />

            <Animated.View style={ styles.content }>
                {/* TOP */}

                <Animated.View style={ styles.topSection }>
                    <Animated.View entering={ FadeInDown.duration(800).delay(100).springify() }>
                        <LogoSection />
                    </Animated.View>
                </Animated.View>

                {/* BOTTOM */}

                <Animated.View style={ styles.bottomSection }>
                    {/* FEATURES */}

                    <Animated.View entering={ FadeInLeft.duration(750).delay(250).springify() }>
                        <FeaturesSection />
                    </Animated.View>

                    {/* ACTIONS */}

                    <Animated.View entering={ FadeInRight.duration(750).delay(450).springify() }>
                        <ActionSection
                            onStart={() =>
                                router.push({
                                    pathname: "/auth",
                                    params: {
                                        mode: "register",
                                    },
                                })
                            }
                            onSignIn={() =>
                                router.push({
                                    pathname: "/auth",
                                    params: {
                                        mode: "login",
                                    },
                                })
                            }
                        />
                    </Animated.View>

                    {/* TERMS */}

                    <Animated.View entering={FadeIn.duration(600).delay(700) } style={styles.terms}>
                        <Typography variant="caption" align="center" color={Colors.textSecondary}>
                            By continuing you agree to{"\n"}

                            <Typography variant="caption" align="center" color={Colors.accentLight}>
                                Terms of Service{" "}

                                <Typography variant="caption" color={Colors.textSecondary}>
                                    and {" "}
                                </Typography>

                                <Typography variant="caption" color={Colors.primaryLight}>
                                    Privacy Policy
                                </Typography>
                            </Typography>
                        </Typography>
                    </Animated.View>
                </Animated.View>
            </Animated.View>
        </Screen>
    );
};