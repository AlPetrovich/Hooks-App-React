import { Routes, Route} from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { HeroesRoutes } from "../heroes"

export const AppRouter = () => {
  return (
    <div>

        <Routes>
        
            <Route path="login" element={<LoginPage />} />

            <Route path="/*" element={<HeroesRoutes />} />

        </Routes>
    </div>
  )
}
