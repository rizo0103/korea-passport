import { Logo } from "@/src/components/common/Logo"
import { Typography } from "@/src/components/ui/Typography"
import { View } from "react-native"
import { styles } from "./LogoSection.styles";
import { Colors, Spacing } from "@/src/theme";

export const LogoSection = () => {
    return (
        <View style={styles.container}>
            <Logo style={{ marginTop: Spacing["sm"], marginBottom: -1, }} />

            <View style={{ alignItems: "center" }}>
            <Typography variant="h2">
                    Korea{" "}
                <Typography variant="h2" color={Colors.primaryLight}>
                    Passport
                </Typography>
            </Typography>

                <Typography variant="body" color={Colors.textPrimary} style={{ marginTop: Spacing.sm }}>
                    Explore Korea
                </Typography>
                <Typography variant="body" color={Colors.textPrimary}>
                    through the real adventures
                </Typography>
            </View>
        </View>
    );
}
