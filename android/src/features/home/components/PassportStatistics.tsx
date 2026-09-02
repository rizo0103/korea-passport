import { Card } from "@/src/components/ui/Card";
import { Icon } from "@/src/components/ui/Icon";
import { ProgressBar } from "@/src/components/ui/ProgressBar";
import { Typography } from "@/src/components/ui/Typography";
import { useAuth } from "@/src/contexts/AuthContext";
import { Colors, IconSizes, Spacing } from "@/src/theme";
import { View } from "react-native";

export const PassportStatistics = () => {
    const { user } = useAuth();

    return (
        <Card variant="glass" style={{ flexDirection: "row", alignItems: "center", }}>
            <View style={{ flex: 0.8, alignItems: "center" }} >
                <Icon
                    source={require("@/assets/icons/passport.png")}
                    size={IconSizes["2xl"]}
                    style={{ padding: 0, margin: 0 }}
                />
            </View>

            <View style={{ flex: 2.8 }}>
                <Typography variant="body" color={Colors.textPrimary} >
                    Passport Level
                </Typography>

                <View style={{ flexDirection: "row", alignItems: "center", marginVertical: Spacing.xxs, }}>
                    <Typography variant="h3">
                        {user?.stats.level}
                    </Typography>

                    <Typography variant="body" color={Colors.textSecondary} style={{ marginLeft: Spacing.sm }} >
                        Explorer
                    </Typography>
                </View>

                <ProgressBar
                    current={user?.stats.xp}
                    max={1200}
                    showLabel
                    label={`${user?.stats.xp} / 1200 XP`}
                />
            </View>

            <View style={{ flex: 0.9, alignItems: "center", justifyContent: "center", }} >
                <Icon source={require("@/assets/icons/reward.png")} size={IconSizes.xl} style={{ margin: 0 }} />

                <Typography align="center" variant="title" style={{ marginTop: Spacing.xs, }} >
                    1200
                </Typography>

                <Typography align="center" variant="caption" color={Colors.textSecondary}>
                    XP left
                </Typography>
            </View>
        </Card>
    );
}