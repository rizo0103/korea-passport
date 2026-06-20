import { Logo } from "@/src/components/common/Logo"
import { Typography } from "@/src/components/ui/Typography"
import { View } from "react-native"
import { styles } from "./LogoSection.styles";

export const LogoSection = () => {
    return (
        <View style={styles.container}>
            <Logo />
            
            <Typography variant="h1">
                Korea Passport
            </Typography>

            <Typography variant="body">
                Learn Korean through real adventures
            </Typography>
        </View>
    );
}
