import { useState } from "react"
import { Login } from "./components/Login"
import { Register } from "./components/Register";

type Mode = "login" | "register";

export const Auth = () => {
    const [mode, setMode] = useState < Mode > ("login");

    if (mode === "register") {
        return (
            <Register />
        )
    }

    return (
        <Login onSwitch={() => setMode("register")} />
    )
}