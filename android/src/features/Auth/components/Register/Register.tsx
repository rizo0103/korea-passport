import { Button } from "@/src/components/ui/Button"
import { Card } from "@/src/components/ui/Card"
import { Input } from "@/src/components/ui/Input"
import { Typography } from "@/src/components/ui/Typography"

export const Register = () => {
    return (
        <Card>
            <Typography variant="h2" align="center">
                Sign Up
            </Typography>

            <Input label="First Name" placeholder="Enter Your First Name" />
            <Input label="Last Name" placeholder="Enter Your Last Name" />
            <Input label="Email" placeholder="Enter Your Email" keyboardType="email-address" />
            <Input label="Phone Number" placeholder="Enter Your Phone Number" />
            <Input label="Username" placeholder="Create Username For Yourself" />

            <Button variant="primary">
                <Typography>
                    Sign Up
                </Typography>
            </Button>

            <Typography align="center">
                Already have an account ? Sign In
            </Typography>
        </Card>
    )
}