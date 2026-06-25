import { IconSizes, Spacing } from "@/src/theme";
import { Image, ImageResizeMode, ImageSourcePropType, ImageStyle, Pressable, StyleProp } from "react-native"

type IconProps = {
    source: ImageSourcePropType;
    size?: number;
    width?: number;
    height?: number;
    tintColor?: string;
    style?: StyleProp < ImageStyle >;
    resizeMode?: ImageResizeMode;
    onPress?: () => void;
}

export const Icon = ({ source, size = IconSizes.md, width, height, tintColor, resizeMode = "contain", style, onPress }: IconProps) => {
    const image = (
        <Image 
            source={source}
            resizeMode={resizeMode}
            style={[
                {
                    width: width ?? size,
                    height: height ?? size,
                    margin: Spacing.md,
                    tintColor,
                },
                style,
            ]}
        />
    );

    if (onPress) {
        return (
            <Pressable onPress={onPress}>
                {image}
            </Pressable>
        );
    }

    return image;
}
