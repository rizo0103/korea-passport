import { Button } from "@/src/components/ui/Button";
import { Card } from "@/src/components/ui/Card";
import { Input } from "@/src/components/ui/Input";
import { Typography } from "@/src/components/ui/Typography";
import { Auth } from "@/src/features/Auth";
import { Spacing } from "@/src/theme";

type ActionSectionProps = {
    onStart: () => void;
    onSignIn: () => void;
}

export const ActionSection = ({ onStart, onSignIn }: ActionSectionProps) => {
    return (
        <Auth />            
    )
}
