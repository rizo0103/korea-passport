import { Button } from "@/src/components/ui/Button";
import { Card } from "@/src/components/ui/Card";
import { Input } from "@/src/components/ui/Input";
import { Typography } from "@/src/components/ui/Typography";
import { Colors, Spacing } from "@/src/theme";
import { isFormValid } from "@/src/utils";
import { useRef, useState } from "react";
import { TextInput } from "react-native";

type LoginProps = {
    onSwitch: () => void;
}

export const Login = ({ onSwitch }: LoginProps) => {
    const nextInputRef = useRef<TextInput | null>(null);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const formValid = isFormValid([username, password], []);

    const handleSubmit = () => {
        console.log(username, password);
    }

    return (
        <Card style={{ padding: Spacing.lg }} variant="glass">
            <Typography align="center" variant="h2">
                Sign In
            </Typography>

            <Input 
                label="Username" 
                placeholder="Enter Your Username" 
                submitBehavior="submit" 
                returnKeyType="next" 
                onSubmitEditing={() => nextInputRef.current?.focus()} 
                onChangeText={text => { setUsername(text) }}
            />

            <Input 
                label="Password" 
                placeholder="Enter Your Password" 
                ref={nextInputRef} 
                secureTextEntry 
                onChangeText={text => { setPassword(text) }}
            />

            <Button disabled={!formValid} style={{ marginTop: Spacing.lg }} onPress={handleSubmit}>
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