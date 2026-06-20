import { Button } from "@/src/components/ui/Button"
import { Card } from "@/src/components/ui/Card"
import { Checkbox } from "@/src/components/ui/Checkbox"
import { Input } from "@/src/components/ui/Input"
import { Typography } from "@/src/components/ui/Typography"
import { Colors, Spacing } from "@/src/theme"
import { useState } from "react"

type RegisterProps = {
    onSwitch: () => void;
}

export const Register = ({ onSwitch } : RegisterProps) => {
    const [ checkboxVal, setCheckboxVal ] = useState(false);

    return (
        <Card style={{ padding: Spacing.lg }}>
            <Typography variant="h2" align="center">
                Sign Up
            </Typography>

            <Input label="Full Name" placeholder="Enter Your Full Name" />
            <Input label="Email" placeholder="Enter Your Email" keyboardType="email-address" autoCapitalize="none" />
            <Input label="Phone Number" placeholder="Enter Your Phone Number" keyboardType="number-pad" />
            <Input label="Username" placeholder="Create Username For Your Account" autoCapitalize="none" />
            <Input label="Password" placeholder="Create Password For Your Account" secureTextEntry />

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