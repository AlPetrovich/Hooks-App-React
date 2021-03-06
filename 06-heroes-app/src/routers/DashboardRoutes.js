import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { HeroScreen } from "../components/hero/HeroScreen";

//Sin Login Al ser rutas hijas no es necesario el BrowserRouter
export const DashboardRoutes = () => {
  return(
      <>
        <Navbar />
          <div className="container">
            <Routes>
                {/* estas rutas solo se podran ver si el usuario esta autenticado */}
                <Route path="marvel" element={<MarvelScreen />} />
                <Route path="dc" element={<DcScreen />} />
                <Route path="search" element={<SearchScreen />} />
                <Route path="hero/:heroId" element={<HeroScreen />} />
                <Route path="/" element={<MarvelScreen />} />

            </Routes>
          </div>
        
      </>
  )
};
