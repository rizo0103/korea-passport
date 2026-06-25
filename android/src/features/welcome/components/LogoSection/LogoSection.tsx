import { Logo } from "@/src/components/common/Logo"
import { Typography } from "@/src/components/ui/Typography"
import { View } from "react-native"
import { styles } from "./LogoSection.styles";
import { Colors } from "@/src/theme";

export const LogoSection = () => {
    return (
        <View style={styles.container}>
            <Logo />
            
            <Typography variant="h1" color={Colors.primaryLight}>
                Korea Passport
            </Typography>

            <Typography variant="body" color={Colors.textPrimary}>
                Explore Korea through real adventures
            </Typography>
        </View>
    );
}
