import { IconSizes } from "@/src/theme";
import { Image, ImageStyle, StyleProp } from "react-native";

type LogoProps = {
    size?: number;
    style?: StyleProp < ImageStyle >;
}

export const Logo = ({ size = 100, style } : LogoProps) => {
    return (
        <Image
            source={require("@/assets/images/Logo.png")}
            style={[
                { width: size, height: size },
                style
            ]}
            resizeMode="contain"
        />
    )
}
