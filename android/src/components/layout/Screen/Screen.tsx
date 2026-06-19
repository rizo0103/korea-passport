import { ReactNode } from "react";
import { Colors } from "@/src/theme";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ScreenProps = {
    children: ReactNode;
    style?: any;
    scrollable?: boolean;
};

export const Screen = ({ children, style, scrollable }: ScreenProps) => {
    const Container = scrollable ? ScrollView : View;
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
            <Container style={[
                {
                    flex: 1,
                    padding: 16,
                },
                style,
            ]}>
                {children}
            </Container>
        </SafeAreaView>
    )
}
