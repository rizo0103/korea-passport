import { Colors, Radius, Spacing } from "@/src/theme";
import { Pressable, View } from "react-native";
import { Typography } from "../Typography";

type CheckboxProps = {
    value?: boolean;
    onChange: (v: boolean) => boolean | void;
    label?: string
};

export const Checkbox = ({ value, onChange, label } : CheckboxProps) => {
    return (
        <Pressable
            onPress={() => onChange(!value)}
            style={{ flexDirection: "row", alignItems: "center", gap: Spacing.sm }}
        >
            <View 
                style={{
                    width: Radius.lg,
                    height: Radius.lg,
                    borderRadius: Radius.sm,
                    borderWidth: 1,
                    borderColor: value ? Colors.primaryDark : Colors.primaryLight,
                    backgroundColor: value ? Colors.primaryLight : Colors.background,
                }}
            />
            {label &&
                <Typography variant="caption">
                    {label}
                </Typography>            
            }
        </Pressable>
    )
}