import { Auth } from "@/src/features/Auth";

type ActionSectionProps = {
    onStart: () => void;
    onSignIn: () => void;
}

export const ActionSection = ({ onStart, onSignIn }: ActionSectionProps) => {
    return (
        <Auth />            
    )
}
