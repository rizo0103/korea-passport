import { Button } from "@/src/components/ui/Button";
import { Card } from "@/src/components/ui/Card";
import { Input } from "@/src/components/ui/Input";
import { Typography } from "@/src/components/ui/Typography";
import { useAuth } from "@/src/contexts/AuthContext";
import { Colors, Spacing } from "@/src/theme";
import { isFormValid } from "@/src/utils";
import { useRef, useState } from "react";
import { Alert, TextInput } from "react-native";

type LoginProps = {
    onSwitch: () => void;
}

export const Login = ({ onSwitch }: LoginProps) => {
    const { login } = useAuth();
    
    const nextInputRef = useRef<TextInput | null>(null);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const formValid = isFormValid([username, password], []);

    const handleSubmit = async () => {
        try {
            setLoading (true);

            await login({
                login: username,
                password
            });

        } catch (error : any) {
            Alert.alert("Login failed ", error.message);
        } finally {
            setLoading(false);
        }
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
                autoCapitalize="none"
            />

            <Input 
                label="Password" 
                placeholder="Enter Your Password" 
                ref={nextInputRef} 
                secureTextEntry 
                onChangeText={text => { setPassword(text) }}
                onSubmitEditing={handleSubmit}
                autoCapitalize="none"
            />

            <Button disabled={!formValid && loading} style={{ marginTop: Spacing.lg }} onPress={handleSubmit}>
                <Typography variant="body">
                    {loading ? "Loading..." : "Continue Journey"}
                </Typography>
            </Button>

            <Typography variant="caption" align="center" onPress={onSwitch}>
                Don{"'"}t have an account yet ? <Typography variant="caption" color={Colors.primaryLight} style={{ textDecorationLine: "underline" }}> Sign Up </Typography>
            </Typography>
        </Card>
    );
}