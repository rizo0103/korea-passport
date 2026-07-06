import { Avatar } from "@/src/components/ui/Avatar";
import { Icon } from "@/src/components/ui/Icon";
import { Typography } from "@/src/components/ui/Typography";
import { useAuth } from "@/src/contexts/AuthContext";
import { getAvatarColor } from "@/src/services/avatarColors";
import { AvatarSizes, IconSizes, Spacing } from "@/src/theme";
import { ImageSourcePropType, View } from "react-native";

export const Header = () => {
    const { user } = useAuth();

    return (
        <View style={{ marginTop: Spacing["2xl"], flexDirection: "row", justifyContent: "space-between", alignItems:"center" }}>
            <View style={{ flexDirection: "row", alignItems: 'center', padding: Spacing.md, gap: Spacing.md }}>
                {user?.avatar 
                    ? <Avatar source={user.avatar.url as ImageSourcePropType} size={AvatarSizes.md} /> 
                    : <Avatar size={AvatarSizes.md} initials={user?.fullName?.split(' ').map(n => n[0]).join('')} color={getAvatarColor(user?.fullName)} />
                }

                <Typography>
                    안녕하세요, {"\n" + user?.fullName}! 👋
                </Typography>
            </View>
            
            <Icon source={require("@/assets/icons/bell.png")} size={IconSizes["xl"]} />
        </View>
    );
}
