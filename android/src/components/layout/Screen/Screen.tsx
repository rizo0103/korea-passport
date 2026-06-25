import { ReactNode } from "react";
import { Colors } from "@/src/theme";
import {
    ImageBackground,
    ImageSourcePropType,
    ScrollView,
    View,
    StyleProp,
    ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ScreenProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    scrollable?: boolean;
    background?: ImageSourcePropType;
};

export const Screen = ({
    children,
    style,
    scrollable = false,
    background,
}: ScreenProps) => {
    const Container = scrollable ? ScrollView : View;

    const content = (
        <Container
            contentContainerStyle={ scrollable ? { flexGrow: 1 } : undefined }
            style={[
                {
                    flex: 1,
                    padding: 16,
                },
                style,
            ]}
        >
            {children}
        </Container>
    );

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: Colors.background,
            }}
            edges={[ 'left', "right", "bottom" ]}
        >
            {background ? (
                <ImageBackground
                    source={background}
                    style={{ flex: 1 }}
                    resizeMode="cover"
                >
                    <View style={{
                        flex: 1,
                        backgroundColor: "rgba(18,18,18,0.55)",
                    }}>
                    {content}
                    </View>
                </ImageBackground>
            ) : (
                content
            )}
        </SafeAreaView>
    );
};