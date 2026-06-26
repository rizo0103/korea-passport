import { useState } from "react"
import { Login } from "./components/Login"
import { Register } from "./components/Register";
import { Screen } from "@/src/components/layout/Screen";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export const Auth = () => {
    const { mode } = useLocalSearchParams < { mode?: "login" | "register"; } > ();
    const [ screen, setScreen ] = useState < "login" | "register" > (mode ?? "login");

    return (
        <Screen scrollable={true} background={require("@/assets/images/seoul-busan-bg.png")}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                {screen === "login" ? (
                    <Login onSwitch={() => setScreen("register")} />
                ) : (
                    <Register onSwitch={() => setScreen("login")} />
                )}
            </View>
        </Screen>
    )
}