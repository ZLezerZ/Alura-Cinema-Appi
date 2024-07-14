import Banner from "../../Components/Banner/Banner.jsx";
import Card from "../../Components/Card/Card.jsx";
import Titulo from "../../Components/Titutlo/Titulo.jsx";
import styles from "./Inicio.module.css";
import { useEffect, useState } from "react";

const Inicio = () => {
    const [videos, setVideos] = useState([]);

    useEffect(()=> {
        const getData = async () =>{
        const respuesta = await fetch("https://my-json-server.typicode.com/ZLezerZ/Alura-Cinema-Appi/db")
        const data = await respuesta.json();
        setVideos(...[data.videos]);
    };
    getData();
    },[]);

  return (
    <div className={styles.container}>
      <Banner img="home" color="#154580"></Banner>
      <Titulo>
        <h1>Un lugar para guardar sus videos favoritos</h1>
      </Titulo>
      <section className={styles.contenedorCartas}>
        {videos.map((video)=>{
            return <Card {...video} key={video.id}/>
        })}
      </section>
    </div>
  );
};

export default Inicio;
