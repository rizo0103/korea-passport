import { Colors, Radius, Spacing } from "@/src/theme";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Typography } from "@/src/components/ui/Typography";
import { Card } from "@/src/components/ui/Card";

const FEATURES = [
    {
        id: "explore",
        title: "Explore",
        description: "Discover new themes",
        icon: "compass-outline",
    },
    {
        id: "learn",
        title: "Learn",
        description: "Learn grammar and words",
        icon: "school-outline",
    },
    {
        id: "compete",
        title: "Compete",
        description: "Take a part in duels",
        icon: "trophy-outline",
    },
];

export const FeaturesSection = () => {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                gap: Spacing.md,
                marginTop: Spacing.lg,
            }}
        >
            {FEATURES.map((item) => (
                <Card
                    key={item.id}
                    variant="glass"
                    style={{
                        flex: 1,
                        borderColor: Colors.border,
                        alignItems: "center",
                        padding: Spacing.md,
                        gap: Spacing.xxs,
                    }}
                >
                    <View
                        style={{
                            width: 52,
                            height: 52,
                            borderRadius: Radius.full,
                            borderWidth: 1,
                            borderColor: Colors.primaryLight,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Ionicons
                            name={item.icon as any}
                            size={24}
                            color={Colors.primaryLight}
                        />
                    </View>

                    <Typography
                        variant="title"
                        align="center"
                        style={{ marginTop: Spacing.sm }}
                    >
                        {item.title}
                    </Typography>

                    <Typography
                        variant="bodySmall"
                        color={Colors.textSecondary}
                        align="center"
                    >
                        {item.description}
                    </Typography>
                </Card>
            ))}
        </View>
    )
};
