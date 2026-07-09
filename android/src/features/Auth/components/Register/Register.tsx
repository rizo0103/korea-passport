import { Avatar } from "@/src/components/ui/Avatar"
import { Button } from "@/src/components/ui/Button"
import { Card } from "@/src/components/ui/Card"
import { Input } from "@/src/components/ui/Input"
import { Typography } from "@/src/components/ui/Typography"
import { useAuth } from "@/src/contexts/AuthContext"
import { getAvatarColor } from "@/src/services/avatarColors"
import { pickImage } from "@/src/services/imagePicker"
import { Colors, Spacing } from "@/src/theme"
import { isFormValid } from "@/src/utils"
import { useMemo, useRef, useState } from "react"
import { Alert, TextInput, View } from "react-native"

type RegisterProps = {
    onSwitch: () => void;
}

type AvatarProps = {
    uri: string;
    name: string;
    type: string;
}

const fields = [
    { id: "fullName", label: "Full Name", placeholder: "Enter Your Full Name", returnKey: "next", autoCapitalize: "words" },
    { id: "email", label: "Email", placeholder: "Enter Your Email", returnKey: "next", keyboardType: "email-address", autoCapitalize: "none" },
    { id: "username", label: "Username", placeholder: "Create Username For Your Account", returnKey: "next", autoCapitalize: "none" },
    { id: "password", label: "Password", placeholder: "Create Password For Your Account", returnKey: "done", secureTextEntry: true, autoCapitalize: "none" }
];

export const Register = ({ onSwitch }: RegisterProps) => {
    const { register } = useAuth();
    
    const [ initials, setInitials ] = useState("?");
    const [ inputVals, setInputVals ] = useState({
        fullName: "",
        email: "",
        username: "",
        password: "",
    });
    const [avatar, setAvatar] = useState < AvatarProps | null > ( null );
    const [ loading, setLoading ] = useState(false);

    const refs = useRef<(TextInput | null)[]>([]);

    const formValid = useMemo(() => {
        return isFormValid(
            [
                inputVals.fullName,
                inputVals.email,
                inputVals.username,
                inputVals.password,
            ],
            []
        );
    }, [
        inputVals.email,
        inputVals.fullName,
        inputVals.password,
        inputVals.username,
    ]);

    const focusNext = (index: number) => {
        if (index + 1 < fields.length) {
            refs.current[index + 1]?.focus();
        } else {
            handleSubmit();
        }
    }

    const handlePickAvatar = async () => {
        const image = await pickImage();

        if (!image) return ;

        setAvatar({ uri: image.uri, name: `${inputVals.username}-avatar.jpg`, type: "image/jpeg" });
    };

    const handleSubmit = async () => {
        try {
            setLoading(true);
            
            await register({ ...inputVals, avatar : avatar || null });

        } catch (error: any) {
            Alert.alert("Register failed: ", error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Card style={{ padding: Spacing.lg }} variant="glass">
            <Typography variant="h2" align="center">
                Sign Up
            </Typography>

            <View style={{ alignItems: "center" }}>
                <Avatar color={getAvatarColor(inputVals.fullName)} editable={true} initials={initials} onPress={handlePickAvatar} source={avatar?.uri ? avatar : null} />
            </View>

            {fields.map((field, index) => (
                <Input
                    id={field.id}
                    ref={el => { refs.current[index] = el; }}
                    key={index}
                    label={field.label}
                    placeholder={field.placeholder}
                    returnKeyType={field.returnKey as any}
                    keyboardType={field.keyboardType as any}
                    autoCapitalize={field.autoCapitalize as any}
                    secureTextEntry={field.secureTextEntry}
                    onSubmitEditing={() => focusNext(index)}
                    value={inputVals[field.id as keyof typeof inputVals]}
                    onChangeText={text => {
                        setInputVals(prev => {
                            const next = {
                                ...prev,
                                [field.id]: text,
                            };

                            if (field.id === "fullName") {
                                const parts = text.trim().split(" ");

                                setInitials(
                                    parts
                                        .slice(0, 2)
                                        .map(p => p[0]?.toUpperCase())
                                        .join("") || "?"
                                );
                            }

                            return next;
                        });
                    }} />
            ))}

            <Button disabled={!formValid && loading} variant="primary" style={{ marginTop: Spacing.lg }} onPress={handleSubmit}>
                <Typography>
                    {loading ? "Loading..." : "Start Journey"}
                </Typography>
            </Button>

            <Typography onPress={onSwitch} variant="caption" align="center">
                Already have an account ? <Typography color={Colors.primaryLight} variant="caption" style={{ textDecorationLine: "underline" }}> Sign In </Typography>
            </Typography>
        </Card>
    )
}