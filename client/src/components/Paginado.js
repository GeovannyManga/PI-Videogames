import {  } from "../styles/paginado.css";




const Paginado = ({ videogamesPorPagina, traerTodo, paginado }) => {
  const numerosDePagina = [];
  for (let i = 0; i < Math.ceil(traerTodo / videogamesPorPagina); i++) {
    numerosDePagina.push(i + 1);
  }

  return (
    <ul className="paginado-ul">
      {numerosDePagina?.map((numero) => {
        return (
          <li className="paginado-li"  key={numero}>
            <button className="paginado-button" onClick={() => paginado(numero)}>
              {numero}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Paginado;


