import { useState } from "react"
import { Login } from "./components/Login"
import { Register } from "./components/Register";
import { Screen } from "@/src/components/layout/Screen";

type Mode = "login" | "register";

export const Auth = () => {
    const [mode, setMode] = useState < Mode > ("login");

    return (
        <Screen scrollable={true}>
            {mode === "login" ? (
                <Login onSwitch={() => setMode("register")} />
                
            ) : (
                <Register onSwitch={() => setMode("login")} />
            )}
        </Screen>
    )
}