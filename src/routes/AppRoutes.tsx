import { Route, Routes } from "react-router"
import { MainScreen } from "../components/screens/MainScreen/MainScreen"
import { PortfolioScreen } from "../components/screens/PortfolioScreen/PortfolioScreen"

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<MainScreen></MainScreen>}></Route>
        <Route path="/portafolio" element={<PortfolioScreen></PortfolioScreen>}></Route>
    </Routes>
  )
}
