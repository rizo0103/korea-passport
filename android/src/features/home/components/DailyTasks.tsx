import { View } from "react-native";

import { Card } from "@/src/components/ui/Card";
import { Icon } from "@/src/components/ui/Icon";
import { ProgressBar } from "@/src/components/ui/ProgressBar";
import { Typography } from "@/src/components/ui/Typography";

import { Colors, IconSizes, Radius, Spacing } from "@/src/theme";

const missions = [
    {
        id: 1,
        title: "Learn 10 new words",
        progress: 4,
        max: 10,
        reward: 40,
        completed: false,
    },
    {
        id: 2,
        title: "Complete 1 lesson",
        progress: 1,
        max: 1,
        reward: 60,
        completed: true,
    },
    {
        id: 3,
        title: "Win 3 quizzes",
        progress: 2,
        max: 3,
        reward: 80,
        completed: false,
    },
];

export const DailyTasks = () => {
    return (
        <Card variant="glass">
            <Typography variant="h3">
                Daily Missions
            </Typography>

            <View>
                {missions.map((mission) => (
                    <View key={mission.id} style={{ flexDirection: "row", alignItems: "center", }}>
                        <View style={{
                                width: 34,
                                height: 34,
                                borderRadius: Radius.full,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography variant="body" color={mission.completed ? Colors.surface : Colors.surfaceSecondary}>
                                {mission.completed 
                                    ? <Icon source={require("@/assets/icons/success.png")} size={IconSizes.xl} /> 
                                    : <Icon source={require("@/assets/icons/error.png")} size={IconSizes.xl} />
                                }
                            </Typography>
                        </View>

                        <View style={{ flex: 1, marginHorizontal: Spacing.md, gap: Spacing.sm }}>
                            <Typography variant="body">
                                {mission.title}
                            </Typography>

                            <ProgressBar
                                current={mission.progress}
                                max={mission.max}
                                showLabel={false}
                            />

                            <Typography
                                variant="caption"
                                color={Colors.textSecondary}
                            >
                                {mission.progress} / {mission.max}
                            </Typography>
                        </View>

                        {/* Reward */}

                        <View
                            style={{
                                alignItems: "center",
                                width: 60,
                            }}
                        >
                            <Icon
                                source={require("@/assets/icons/reward.png")}
                                size={IconSizes.lg}
                            />

                            <Typography
                                variant="caption"
                                color={Colors.textSecondary}
                            >
                                +{mission.reward}
                            </Typography>
                        </View>
                    </View>
                ))}
            </View>
        </Card>
    );
};