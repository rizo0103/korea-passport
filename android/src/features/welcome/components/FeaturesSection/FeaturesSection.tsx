import { Colors, Shadows, Spacing } from "@/src/theme";
import { FlatList, View } from "react-native";
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
        <View style={{ marginTop: Spacing["lg"], alignItems: 'center' }}>
            <FlatList
                data={FEATURES}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                contentContainerStyle={{ paddingHorizontal: Spacing.md }}
                renderItem={({ item }) => (
                    <Card
                        style={{
                            width: 160,
                            borderColor: Colors.border,
                            alignItems: "center",
                            padding: Spacing.md,
                            gap: Spacing.xxs,
                            ...Shadows.lg
                        }}
                    >
                        <Ionicons
                            name={item.icon as any}
                            size={28}
                            color={Colors.primaryLight}
                        />

                        <Typography style={{ marginTop: Spacing.md }} variant="caption" align="center">
                            {item.title}
                        </Typography>

                        <Typography color={Colors.textSecondary} variant="caption" align="center">
                            {item.description}
                        </Typography>
                    </Card>
                )} 
            />
        </View>
    )
};
