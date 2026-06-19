import { View, Text } from "react-native";

export default function Home() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#0f0f1a" }}>
            <Text style={{ color: "white", fontSize: 24 }}>
                Korea Passport
            </Text>
            <Text style={{ color: "#aaa", marginTop: 10 }}>
                Home Screen
            </Text>
        </View>
    );
}