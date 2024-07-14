import styles from "./Cabecera.module.css";
import { Link } from "react-router-dom";
import logo from "./logo-alura.png";
import CabeceraLink from "../CabeceraLink/CabeceraLink.jsx";

const Cabecera = () => {
  return (
    <header className={styles.cabecera}>
      <Link to="/">
        <section className={styles.logoContainer}>
        <img src={logo} alt="Logo Alura" />
        <span>Cinema</span>
        </section>
      </Link>
      <nav>
        <CabeceraLink url="./">
            Home
        </CabeceraLink>
        <CabeceraLink url="./Favoritos">
            Favoritos
        </CabeceraLink>
      </nav>
    </header>
  );
};
export default Cabecera;
