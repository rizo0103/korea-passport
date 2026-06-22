import { Button } from "@/src/components/ui/Button"
import { Card } from "@/src/components/ui/Card"
import { Checkbox } from "@/src/components/ui/Checkbox"
import { Input } from "@/src/components/ui/Input"
import { Typography } from "@/src/components/ui/Typography"
import { Colors, Spacing } from "@/src/theme"
import { useRef, useState } from "react"
import { TextInput } from "react-native"

type RegisterProps = {
    onSwitch: () => void;
}

export const Register = ({ onSwitch } : RegisterProps) => {
    const [ checkboxVal, setCheckboxVal ] = useState(false);
    const refs = useRef < (TextInput | null)[] > ([]);
    const fields = [
        { label: "Full Name", placeholder: "Enter Your Full Name", returnKey: "next", autoCapitalize: "words" },
        { label: "Email", placeholder: "Enter Your Email", returnKey: "next", keyboardType: "email-address", autoCapitalize: "none" },
        { label: "Username", placeholder: "Create Username For Your Account", returnKey: "next", autoCapitalize: "none" },
        { label: "Password", placeholder: "Create Password For Your Account", returnKey: "done", secureTextEntry: true, autoCapitalize: "none" }
    ];

    const focusNext = (index: number) => {
        if (index + 1 < fields.length) {
            refs.current[index + 1]?.focus();
        } else {
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        // pass;
    }
    
    return (
        <Card style={{ padding: Spacing.lg }}>
            <Typography variant="h2" align="center">
                Sign Up
            </Typography>

            {fields.map((field, index) => (
                <Input
                    ref={el => { refs.current[index] = el; }}
                    key={index}
                    label={field.label} 
                    placeholder={field.placeholder}
                    returnKeyType={field.returnKey as any}
                    keyboardType={field.keyboardType as any}
                    autoCapitalize={field.autoCapitalize as any}
                    secureTextEntry={field.secureTextEntry}
                    onSubmitEditing={() => focusNext(index)}
                />
            ))}
            <Checkbox label="Agreed with terms of service" onChange={() => setCheckboxVal(!checkboxVal)} value={checkboxVal} />

            <Button variant="primary" style={{ marginTop: Spacing.lg }}>
                <Typography>
                    Start Journey
                </Typography>
            </Button>

            <Typography onPress={onSwitch} variant="caption" align="center">
                Already have an account ? <Typography color={Colors.primaryLight} variant="caption" style={{ textDecorationLine: "underline" }}> Sign In </Typography>
            </Typography>
        </Card>
    )
}