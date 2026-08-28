import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import Animated, {
    FadeIn,
    FadeOut,
} from "react-native-reanimated";

import { Typography } from "@/src/components/ui/Typography";
import { Colors, Radius, Spacing } from "@/src/theme";
import { API } from "@/src/config/api";

type ServerStatusProps = {
    url?: string;
};

export const ServerStatus = ({
    url = `${API.BASE_URL}/health`,
}: ServerStatusProps) => {
    const [status, setStatus] = useState<
        "checking" | "online" | "offline"
    >("checking");

    const checkServer = async () => {
        try {
            const controller = new AbortController();

            const timeout = setTimeout(
                () => controller.abort(),
                5000
            );

            const response = await fetch(url, {
                method: "GET",
                signal: controller.signal,
            });

            clearTimeout(timeout);

            setStatus(response.ok ? "online" : "offline");
        } catch {
            setStatus("offline");
        }
    };

    useEffect(() => {
        checkServer();

        const interval = setInterval(checkServer, 30000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Animated.View
            entering={FadeIn.duration(400)}
            exiting={FadeOut.duration(200)}
            style={{
                position: "absolute",
                top: Spacing["2xl"],
                right: Spacing.lg,

                flexDirection: "row",
                alignItems: "center",

                paddingHorizontal: Spacing.sm,
                paddingVertical: 4,

                borderRadius: Radius.full,

                backgroundColor:
                    status === "offline"
                        ? "rgba(220, 60, 60, 0.12)"
                        : "rgba(255,255,255,0.06)",
            }}
        >
            {status === "checking" ? (
                <ActivityIndicator
                    size="small"
                    color={Colors.textSecondary}
                />
            ) : (
                <View
                    style={{
                        width: 6,
                        height: 6,
                        borderRadius: 999,
                        backgroundColor:
                            status === "online"
                                ? "#4CAF50"
                                : "#EF5350",
                    }}
                />
            )}

            <Typography
                variant="caption"
                color={
                    status === "offline"
                        ? Colors.error
                        : Colors.textSecondary
                }
                style={{
                    marginLeft: Spacing.xs,
                    fontSize: 10,
                }}
            >
                {status === "checking"
                    ? "Checking"
                    : status === "online"
                        ? "Online"
                        : "Offline"}
            </Typography>
        </Animated.View>
    );
};