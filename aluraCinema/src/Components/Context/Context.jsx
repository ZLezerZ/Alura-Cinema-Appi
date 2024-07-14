import {createContext, useContext, useState} from "react";

export const FavoritosContext = createContext();

FavoritosContext.displayName= "Favoritos";

const FavoritoProvider = ({children}) => {
    const [favorito, setFavorito] = useState([]);

    return (
        <FavoritosContext.Provider value={{favorito, setFavorito}}>
            {children}
        </FavoritosContext.Provider> 
    );
}

//Creando un hook presonalizado:

export const useFavoritosContext =()=>{
    const {favorito, setFavorito} = useContext(FavoritosContext)

    function agregarFavorito(nuevoFavorito){
        const favoritoRepetido = favorito.some((item) => item.id === nuevoFavorito.id); //Acá se guarda un booleano en favoritoRepetido si encuentra en el array de favorito el nuevoFavorito que le estoy mandando
        let nuevaLista = [...favorito] //Acá creamos una nueva copia de favorito
        if(!favoritoRepetido){ //Si esto es falso, es decir que no encontró en la lista favorito un id igual al que trae el nuevoFavorito
            nuevaLista.push(nuevoFavorito) //Entonces agregamos el nuevoFavorito a la lista nueva que creamos copiando del array del estado
            return setFavorito(nuevaLista) //Y acá diréctamente modificamos el estado favorito con la nuevaLista que incluye el favorito no repetido
        }

        nuevaLista = favorito.filter(item => item.id !== nuevoFavorito.id) //Esto significa que cuando haya un item.id que sea diferente al nuevoFavorito.id, se agregue a la lista que se crea con el filter, excluyendo al que se repite en id
        return setFavorito(nuevaLista) //Por tanto, si nuevoFavorito tiene un id que ya se repite en la lista que teníamos, se está eliminando a ese item de la lista, esto es como un switch de like, encender o apagar el like para que si le dan denuevo a favorito lo quite de la lista.
    }

    return {favorito, agregarFavorito};
}

export default FavoritoProvider
