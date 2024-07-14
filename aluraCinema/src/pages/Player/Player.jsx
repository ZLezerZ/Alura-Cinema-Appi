import Banner from "../../Components/Banner/Banner";
import Titulo from "../../Components/Titutlo/Titulo";
import styles from "./Player.module.css";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import { useEffect, useState } from "react";

const Player = () => {
  const [video, setVideo] = useState([]);
  const parametros = useParams();
  // const video = videos.find((video) => video.id === Number(parametros.id));
  useEffect(()=>{
    const getData = async () =>{
      const respuesta = await fetch(`https://my-json-server.typicode.com/ZLezerZ/Alura-Cinema-Appi/videos?id=${parametros.id}`);
      const data = await respuesta.json();
      setVideo(...data)
    }
    getData();
  }, []);

  if(!video) return <NotFound/> //Esto es importante para que aparezca el cartel de error
  return (
    <div className={styles.container}>
      <Banner img="player" color="#58B9AE"></Banner>
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.contenedorVideo}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>
    </div>
  );
};

export default Player;
