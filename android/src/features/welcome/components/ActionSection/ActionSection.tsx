import { Card } from "@/src/components/ui/Card";
import { Typography } from "@/src/components/ui/Typography";
import { Button } from "@/src/components/ui/Button";
import { StyleProp, ViewStyle } from "react-native";

type ActionSectionProps = {
    onStart: () => void;
    onSignIn: () => void;
    style?: StyleProp < ViewStyle >
}

export const ActionSection = ({ onStart, onSignIn, style }: ActionSectionProps) => {
    return (
        <Card style={[ style ]} variant="default">
            <Button variant="accent" onPress={onStart}>
                <Typography>
                    Begin your journey
                </Typography>
            </Button>

            <Button variant="primary" onPress={onSignIn}>
                <Typography>
                    Already have an account
                </Typography>
            </Button>
        </Card>
    )
}
