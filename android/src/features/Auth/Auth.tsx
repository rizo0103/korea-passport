import { useState } from "react"
import { Login } from "./components/Login"
import { Register } from "./components/Register";
import { Screen } from "@/src/components/layout/Screen";
import { useLocalSearchParams } from "expo-router";

export const Auth = () => {
    const { mode } = useLocalSearchParams < { mode?: "login" | "register"; } > ();
    const [ screen, setScreen ] = useState < "login" | "register" > (mode ?? "login");

    return (
        <Screen scrollable={true}>
            {screen === "login" ? (
                <Login onSwitch={() => setScreen("register")} />
                
            ) : (
                <Register onSwitch={() => setScreen("login")} />
            )}
        </Screen>
    )
}