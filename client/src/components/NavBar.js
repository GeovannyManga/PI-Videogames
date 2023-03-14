import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllName,
  filterDbInfo,
  filterApiInfo,
  ordenarAz,
  ordenarZa,
  getAllVideogames,
  loader,
  setGenreFilter
} from "../redux/actions";
import {} from "../styles/navBar.css";

const NavBar = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  console.log(name);
  const genre = useSelector((state) => state.genres);

  const state = useSelector((state) => state.data);
  console.log(state)
  const handlerInput = () => {
    dispatch(getAllName(name));
  };

  const handlerFilterDb = (e) => {
    const value = e.target.value;
    if (value === "DB") {
      handleFilterDb();
    } else if (value === "API") {
      handleFilterApi();
    } else if (value === "ALL") {
      handleGetAllVideogames();
    }
  };

  const handleFilterDb = async () => {
    dispatch(loader(false));
    await dispatch(filterDbInfo(state));
    dispatch(loader(true));
  };

  const handleFilterApi = async () => {
    dispatch(loader(false));
    await dispatch(filterApiInfo(state));
    dispatch(loader(true));
  };

  const handleGetAllVideogames = async () => {
    dispatch(loader(false));
    await dispatch(getAllVideogames());
    dispatch(loader(true));
  };

  const handlerFilterGenres = (e) => {
    const value = e.target.value;
    return dispatch(setGenreFilter(value))
    }
   

  const handlerAz = (e) => {
    const value = e.target.value;
    if (value === "opcion1") {
      return dispatch(ordenarAz(state));
    } else {
      return dispatch(ordenarZa(state));
    }
  };

  return (
    <div className="div-navBar">
      <Link to={"/"} >
        <div className="div-logo"></div>
      </Link>
      <div className="form-nav-bar">
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Buscar..."
          type="text"
          className="input-nav"
        ></input>
        <button onClick={() => handlerInput()} className="button-nav">
          Buscar
        </button>
      </div>
      <div className="div-ul">
        <ul className="ul-menu">
          <select onChange={(e) => handlerAz(e)} className="l">
            <option value="">ordenar...</option>
            <option value="opcion1">Odenar A-Z</option>
            <option value="opcion2">Ordenar Z-A</option>
          </select>
          <select onChange={(e) => handlerFilterDb(e)} className="l">
            <option value="">filtrar</option>
            <option value="ALL">filtro All</option>
            <option value="API">filtro api</option>
            <option value="DB">filtro db</option>
          </select>
          <select onChange={(e)=>handlerFilterGenres(e)} className="l">
            {genre.map((genres) => (
              <option key={genres.id} value={genres.name}>
                {genres.name}
              </option>
            ))}
          </select>
          <Link id="form-link" className="l" to="/form" >Form</Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
