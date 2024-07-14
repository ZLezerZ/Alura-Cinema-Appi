import logo from "../Cabecera/logo-alura.png";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Desarrollado por</p>
      <picture>
        <img src={logo} alt="Logo Alura" />
      </picture>
    </footer>
  );
};
export default Footer;
