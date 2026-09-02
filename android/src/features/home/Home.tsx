import { Screen } from "@/src/components/layout/Screen"
import { Header } from "./components/Header"
import { PassportStatistics } from "./components/PassportStatistics"
import { DailyTasks } from "./components/DailyTasks"

export const Home = () => {

    return (
        <Screen svgBackground scrollable>
            <Header />
            <PassportStatistics />
            <DailyTasks />
        </Screen>
    )
}
