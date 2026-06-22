import { Button } from "@/src/components/ui/Button";
import { Card } from "@/src/components/ui/Card";
import { Input } from "@/src/components/ui/Input";
import { Typography } from "@/src/components/ui/Typography";
import { Colors, Spacing } from "@/src/theme";
import { useRef } from "react";
import { TextInput } from "react-native";

type LoginProps = {
    onSwitch: () => void;
}

export const Login = ({ onSwitch } : LoginProps) => {
    const nextInputRef = useRef < TextInput | null > (null);

    return (
        <Card style={{ padding: Spacing.lg }}>
            <Typography align="center" variant="h2">
                Sign In
            </Typography>
            
            <Input label="Username" placeholder="Enter Your Username" submitBehavior="submit" returnKeyType="next" onSubmitEditing={() => nextInputRef.current?.focus()} />
            <Input label="Password" placeholder="Enter Your Password" ref={nextInputRef} secureTextEntry />
            
            <Button style={{ marginTop: Spacing.lg }}>
                <Typography variant="body">
                    Continue Journey
                </Typography>
            </Button>

            <Typography variant="caption" align="center" onPress={onSwitch}>
                Don{"'"}t have an account yet ? <Typography variant="caption" color={Colors.primaryLight} style={{ textDecorationLine: "underline" }}> Sign Up </Typography>  
            </Typography>
        </Card>
    );
}