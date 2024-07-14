import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import { useFavoritosContext } from "../Context/Context";
import Titulo from "../Titutlo/Titulo";
import styles from "./Favoritos.module.css";

const Favoritos = () => {
    const {favorito} = useFavoritosContext();
  return (
    <div className={styles.container}>
      <Banner img="favoritos" color={"#00BF633D"} />
      <Titulo>
        <h1>Favoritos</h1>
      </Titulo>
      <section className={styles.contenedorCartas}>
        {favorito.map((fav) =>{
           return <Card {...fav} key={fav.id}></Card>
        })}
      </section>
    </div>
  );
};

export default Favoritos;
