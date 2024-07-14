import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio";
import Favoritos from "./Components/Favoritos/Favoritos";
import Player from "./pages/Player/Player";
import NotFound from "./pages/NotFound/NotFound";
import PaginaBase from "./pages/PaginaBase/PaginaBase";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}> 
          <Route index element={<Inicio />}></Route>
          <Route path="favoritos" element={<Favoritos />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
