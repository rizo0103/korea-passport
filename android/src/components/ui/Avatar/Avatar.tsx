import { Image, ImageSourcePropType, Pressable, View } from "react-native"
import { createStyles } from "./Avatar.styles";
import { Typography } from "../Typography";
import { AvatarSizes, Colors } from "@/src/theme";

type AvatarProps = {
    source?: ImageSourcePropType | null;
    size?: number;
    editable?: boolean;
    onPress?: () => void;
    initials?: string;
    online?: boolean;
    color?: string,
}

export const Avatar = ({ source, size = AvatarSizes.xl, editable, onPress, initials, online, color = Colors.surface } : AvatarProps) => {

    return (
        <Pressable onPress={editable ? onPress : undefined}>
            <View style={createStyles(size, color).container}>
                {source ? (
                    <Image 
                        source={source}
                        style={{ width: "100%", height: "100%" }}
                        resizeMode="cover"
                    />
                ) : (
                    <Typography variant="h1">
                        {initials ?? "?"}
                    </Typography>
                )}
            </View>
        </Pressable>
    )
}