import Cabecera from "../../Components/Cabecera/Cabecera";
import FavoritoProvider from "../../Components/Context/Context";
import Contenedor from "../../Components/Contenedor/Contenedor.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import {Outlet} from "react-router-dom";
const PaginaBase = () => {
  return (
    <main>
      <Cabecera />
      <FavoritoProvider>
        <Contenedor>
          <Outlet></Outlet>
        </Contenedor>
      </FavoritoProvider>
      <Footer />
    </main>
  );
};

export default PaginaBase;
