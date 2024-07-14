import { useFavoritosContext } from "../Context/Context";
import styles from "./Card.module.css";
import iconoFavorito from "./iconoFavorito.png";
import iconoNoFavorito from "./iconoNoFavorito.png";
import {Link} from "react-router-dom";

const Card = ({ id, capa, titulo }) => {
  const { favorito, agregarFavorito } = useFavoritosContext();
  const esFavorito = favorito.some((fav) => fav.id === id);
  const icono = esFavorito ? iconoFavorito : iconoNoFavorito;

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <picture>
          <img src={capa} alt={titulo} className={styles.capa} />
          <h2>{titulo}</h2>
          <img
            src={icono}
            alt="Icono Favorito"
            onClick={() => agregarFavorito({ id, capa, titulo })}
          />
        </picture>
      </Link>
    </div>
  );
};
export default Card;
