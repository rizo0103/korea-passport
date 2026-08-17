import { Ionicons } from "@expo/vector-icons";
import Animated, {
    FadeInUp,
} from "react-native-reanimated";
import { useWindowDimensions, View } from "react-native";

import { Card } from "@/src/components/ui/Card";
import { Typography } from "@/src/components/ui/Typography";

import {
    Colors,
    IconSizes,
    Radius,
    Spacing,
} from "@/src/theme";

const features = [
    {
        id: "explore",
        title: "Explore",
        description: "Discover Korea",
        icon: "compass-outline" as const,
        color: Colors.primaryLight,
    },
    {
        id: "learn",
        title: "Learn",
        description: "Master Korean",
        icon: "school-outline" as const,
        color: Colors.accentLight,
    },
    {
        id: "compete",
        title: "Compete",
        description: "Challenge yourself",
        icon: "trophy-outline" as const,
        color: "#FBC02D",
    },
];

type Feature = typeof features[number];

type FeatureCardProps = {
    feature: Feature;
    width: number;
    height: number;
};

const FeatureCard = ({
    feature,
    width,
    height,
}: FeatureCardProps) => {
    return (
        <Card
            variant="glass"
            style={{
                width,
                height,

                alignItems: "center",
                justifyContent: "center",

                margin: 0,
                gap: 0,
                paddingHorizontal: Spacing.sm,
                paddingVertical: Spacing.sm,

                borderRadius: Radius.lg,
            }}
        >
            {/* Icon */}

            <View
                style={{
                    width: IconSizes.xl,
                    height: IconSizes.xl,

                    borderRadius: Radius.full,

                    alignItems: "center",
                    justifyContent: "center",

                    backgroundColor: `${feature.color}20`,
                }}
            >
                <Ionicons
                    name={feature.icon}
                    size={IconSizes.md}
                    color={feature.color}
                />
            </View>

            {/* Title */}

            <Typography
                variant="body"
                align="center"
                style={{
                    marginTop: Spacing.sm,
                }}
            >
                {feature.title}
            </Typography>

            {/* Description */}

            <Typography
                variant="caption"
                align="center"
                color={Colors.textSecondary}
                style={{
                    marginTop: Spacing.xs,
                }}
            >
                {feature.description}
            </Typography>
        </Card>
    );
};

export const FeaturesSection = () => {
    const { width } = useWindowDimensions();

    const isSmallPhone = width < 380;
    const isTablet = width >= 768;

    /*
     * Make cards slightly wider while keeping
     * enough room for all three cards.
     */

    const cardWidth = isTablet
        ? 190
        : isSmallPhone
            ? 115
            : 140;

    const cardHeight = isTablet
        ? 135
        : isSmallPhone
            ? 100
            : 110;

    const bottomGap = isTablet
        ? Spacing.lg
        : Spacing.md;

    return (
        <View
            style={{
                width: "100%",
                alignItems: "center",

                /*
                 * Prevent cards from touching
                 * the sections above and below.
                 */
                paddingVertical: Spacing.sm,
            }}
        >
            {/* Top card */}

            <Animated.View
                entering={FadeInUp
                    .duration(550)
                    .delay(0)
                    .springify()
                }
            >
                <FeatureCard
                    feature={features[0]}
                    width={cardWidth}
                    height={cardHeight}
                />
            </Animated.View>

            {/* Bottom cards */}

            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",

                    gap: bottomGap,

                    marginTop: bottomGap,
                }}
            >
                <Animated.View
                    entering={FadeInUp
                        .duration(550)
                        .delay(120)
                        .springify()
                    }
                >
                    <FeatureCard
                        feature={features[1]}
                        width={cardWidth}
                        height={cardHeight}
                    />
                </Animated.View>

                <Animated.View
                    entering={FadeInUp
                        .duration(550)
                        .delay(240)
                        .springify()
                    }
                >
                    <FeatureCard
                        feature={features[2]}
                        width={cardWidth}
                        height={cardHeight}
                    />
                </Animated.View>
            </View>
        </View>
    );
};