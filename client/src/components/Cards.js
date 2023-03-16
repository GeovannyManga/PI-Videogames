

import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getAllVideogames} from "../redux/actions.js";
import Paginado from "../components/Paginado.js";
import loaderImage  from "../assets/loader.gif";
import {  } from "../styles/cards.css";

const Cards = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.data);
  const [paginaActual, setPaginaActual] = useState(1);
  const [videogmesPorPagina] = useState(10);
  const loader = useSelector(state=> state.loader)

  const indiceDelUltimoVideogame = paginaActual * videogmesPorPagina;
  const indiceDelPrimerVideogame = indiceDelUltimoVideogame - videogmesPorPagina;
  const videogamesActuales = state.slice(
    indiceDelPrimerVideogame,
    indiceDelUltimoVideogame
  );

  const paginado = (numeroDePagina) => {
    setPaginaActual(numeroDePagina);
  };

  useEffect(() => {
   dispatch(getAllVideogames());
  }, [dispatch]);

  return (
    <div>
      <section>
        <Paginado
          videogamesPorPagina={videogmesPorPagina}
          traerTodo={state.length}
          paginado={paginado}
        />
      </section>
      <section className="section-cards" >
        {loader === false ? (
        <img src={loaderImage} alt="Loading..." />
      ) :
        videogamesActuales && videogamesActuales.length > 0 ? 
         videogamesActuales.map((game) => {
            return (
              <Card className="card-component"
                ID={game.ID}
                id={game.id}
                name={game.name}
                img={game.background_image}
                generos={game.genres}
                />
          )
        }): <img src={loaderImage} alt="loader" />}
      </section>
    </div>
  );
};

export default Cards;