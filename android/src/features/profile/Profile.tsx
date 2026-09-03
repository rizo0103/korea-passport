import { View } from "react-native";

import { Screen } from "@/src/components/layout/Screen";
import { Typography } from "@/src/components/ui/Typography";
import { Avatar } from "@/src/components/ui/Avatar";
import { Card } from "@/src/components/ui/Card";
import { ProgressBar } from "@/src/components/ui/ProgressBar";
import { Button } from "@/src/components/ui/Button";

import { Colors } from "@/src/theme";

import { useAuth } from "@/src/contexts/AuthContext";

import { styles } from "./Profile.styles";

export const Profile = () => {
    const { user, logout } = useAuth();

    const username =
        user?.username ??
        user?.email?.split("@")[0] ??
        "Student";

    const initials = username
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
        <Screen scrollable>
            <View style={styles.container}>

                {/* Header */}

                <View style={styles.header}>
                    <Typography
                        variant="h1"
                        color={Colors.textPrimary}
                    >
                        Profile
                    </Typography>

                    <Typography
                        variant="bodySmall"
                        color={Colors.textSecondary}
                    >
                        Your Korea Passport
                    </Typography>
                </View>

                {/* Profile */}

                <View style={styles.profileSection}>
                    <Avatar
                        size={120}
                        initials={initials}
                    />

                    <View style={styles.userInfo}>
                        <Typography
                            variant="h2"
                            color={Colors.textPrimary}
                        >
                            {username}
                        </Typography>

                        <Typography
                            variant="bodySmall"
                            color={Colors.textSecondary}
                        >
                            {user?.email ?? "No email"}
                        </Typography>
                    </View>
                </View>

                {/* Level */}

                <Card
                    variant="glass"
                    shadow="md"
                >
                    <View style={styles.cardHeader}>
                        <Typography
                            variant="title"
                            color={Colors.textPrimary}
                        >
                            ⭐ Level 5
                        </Typography>

                        <Typography
                            variant="bodySmall"
                            color={Colors.textSecondary}
                        >
                            840 / 1000 XP
                        </Typography>
                    </View>

                    <ProgressBar
                        progress={84}
                    />
                </Card>

                {/* Statistics */}

                <View style={styles.statistics}>

                    <Card
                        variant="glass"
                        shadow="sm"
                        style={styles.statCard}
                    >
                        <Typography
                            variant="h2"
                            color={Colors.primaryLight}
                        >
                            12
                        </Typography>

                        <Typography
                            variant="bodySmall"
                            color={Colors.textSecondary}
                        >
                            Wins
                        </Typography>
                    </Card>

                    <Card
                        variant="glass"
                        shadow="sm"
                        style={styles.statCard}
                    >
                        <Typography
                            variant="h2"
                            color={Colors.accentLight}
                        >
                            24
                        </Typography>

                        <Typography
                            variant="bodySmall"
                            color={Colors.textSecondary}
                        >
                            Duels
                        </Typography>
                    </Card>

                    <Card
                        variant="glass"
                        shadow="sm"
                        style={styles.statCard}
                    >
                        <Typography
                            variant="h2"
                            color={Colors.success}
                        >
                            7
                        </Typography>

                        <Typography
                            variant="bodySmall"
                            color={Colors.textSecondary}
                        >
                            Day Streak
                        </Typography>
                    </Card>

                </View>

                {/* Passport */}

                <Card
                    variant="glass"
                    shadow="md"
                >
                    <Typography
                        variant="title"
                        color={Colors.textPrimary}
                    >
                        🇰🇷 Korean Progress
                    </Typography>

                    <View style={styles.progressRow}>
                        <Typography
                            variant="bodySmall"
                            color={Colors.textSecondary}
                        >
                            Vocabulary
                        </Typography>

                        <Typography
                            variant="bodySmall"
                            color={Colors.textPrimary}
                        >
                            68%
                        </Typography>
                    </View>

                    <ProgressBar progress={68} />

                    <View style={styles.progressRow}>
                        <Typography
                            variant="bodySmall"
                            color={Colors.textSecondary}
                        >
                            Grammar
                        </Typography>

                        <Typography
                            variant="bodySmall"
                            color={Colors.textPrimary}
                        >
                            42%
                        </Typography>
                    </View>

                    <ProgressBar progress={42} />
                </Card>

                {/* Logout */}

                <View style={styles.logoutSection}>
                    <Button
                        variant="secondary"
                        onPress={handleLogout}
                    >
                        <Typography variant="body">
                            Logout
                        </Typography>
                    </Button>
                </View>

            </View>
        </Screen>
    );
};
