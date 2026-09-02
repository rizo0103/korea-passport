import {
    Image,
    ImageSourcePropType,
    Pressable,
    View,
} from "react-native";

import { Typography } from "../Typography";

import { AvatarSizes, Colors } from "@/src/theme";

import { createStyles } from "./Avatar.styles";

type AvatarProps = {
    source?: ImageSourcePropType | null;
    size?: number;
    editable?: boolean;
    onPress?: () => void;
    initials?: string;
    online?: boolean;
    color?: string;
};

export const Avatar = ({
    source,
    size = AvatarSizes.xl,
    editable,
    onPress,
    initials,
    online,
    color = Colors.surface,
}: AvatarProps) => {
    const styles = createStyles(size, color);

    return (
        <Pressable
            onPress={editable ? onPress : undefined}
            disabled={!editable}
            style={({ pressed }) => [
                styles.wrapper,
                pressed && editable && styles.pressed,
            ]}
        >
            <View style={styles.shadow}>
                <View style={styles.container}>
                    {source ? (
                        <Image
                            source={source}
                            style={styles.image}
                            resizeMode="cover"
                        />
                    ) : (
                        <Typography
                            variant="h2"
                            color={Colors.textPrimary}
                        >
                            {initials ?? "?"}
                        </Typography>
                    )}

                    {/* Comic highlight */}
                    <View pointerEvents="none" style={styles.highlight} />

                    {/* Comic shine */}
                    <View pointerEvents="none" style={styles.shine} />
                </View>
            </View>

            {online && (
                <View style={styles.onlineWrapper}>
                    <View style={styles.onlineDot} />
                </View>
            )}

            {editable && (
                <View style={styles.editBadge}>
                    <Typography
                        variant="caption"
                        color={Colors.textPrimary}
                    >
                        ✎
                    </Typography>
                </View>
            )}
        </Pressable>
    );
};