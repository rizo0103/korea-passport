import { Logo } from "@/src/components/common/Logo"
import { Typography } from "@/src/components/ui/Typography"
import { View } from "react-native"
import { styles } from "./LogoSection.styles";
import { Colors, Spacing } from "@/src/theme";

export const LogoSection = () => {
    return (
        <View style={styles.container}>
            <Logo style={{ marginTop: Spacing["2xl"] }} />

            <View style={{ alignItems: "center" }}>
            <Typography variant="h1">
                    Korea{" "}
                <Typography variant="h1" color={Colors.primaryLight}>
                    Passport
                </Typography>
            </Typography>

                <Typography variant="body" color={Colors.textPrimary}>
                    Explore Korea
                </Typography>
                <Typography variant="body" color={Colors.textPrimary}>
                    through the real adventures
                </Typography>
            </View>
        </View>
    );
}
