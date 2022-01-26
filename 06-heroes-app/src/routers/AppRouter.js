//Router Principal
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";



export const AppRouter = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/login" element={<LoginScreen />} />
        
        {/* PrivateRoute es quien verifica al usuario y permite ingresar al dashboard */}
        <Route path="/*" element={
            <PrivateRoute>
                <DashboardRoutes />
            </PrivateRoute>
          } 
        />


        {/* <Route path="/*" element={<DashboardRoutes />} />  */}
        
      </Routes>
    </BrowserRouter>
  );
};
