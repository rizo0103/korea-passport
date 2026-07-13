import { Screen } from "@/src/components/layout/Screen"
import { Header } from "./components/Header"
import { PassportStatistics } from "./components/PassportStatistics"
import { DailyTasks } from "./components/DailyTasks"

export const Home = () => {

    return (
        <Screen background={require("@/assets/images/tabs/home.png")} scrollable>
            <Header />
            <PassportStatistics />
            <DailyTasks />
        </Screen>
    )
}
