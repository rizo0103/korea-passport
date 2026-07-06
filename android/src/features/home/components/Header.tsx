import { Avatar } from "@/src/components/ui/Avatar";
import { Typography } from "@/src/components/ui/Typography";
import { useAuth } from "@/src/contexts/AuthContext";
import { AvatarSizes, Spacing } from "@/src/theme";
import { ImageSourcePropType, View } from "react-native";

export const Header = () => {
    const { user } = useAuth();

    return (
        <View style={{ marginTop: Spacing["2xl"], borderWidth: 1, flexDirection: "row", justifyContent: "space-between", alignItems:"center" }}>
            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                {/* {user?.avatar 
                    ? <Avatar source={user.avatar.url as ImageSourcePropType} size={AvatarSizes.md} /> 
                } */}
                <Avatar size={AvatarSizes.md} initials="SM" />
                <Typography>
                    Hello, {user?.fullName}
                </Typography>
            </View>

            <View>
                <Typography>
                    Right part
                </Typography>
            </View>
        </View>
    );
}