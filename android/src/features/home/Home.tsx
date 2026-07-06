import { Screen } from "@/src/components/layout/Screen"
import { Header } from "./components/Header"

export const Home = () => {

    return (
        <Screen background={require("@/assets/images/tabs/home.png")} scrollable>
            <Header />
        </Screen>
    )
}
