import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createVideogame, getAllGenres } from "../redux/actions.js";
import {  } from "../styles/form.css";

const Form = () => {
  const [generState, setGenerState] = useState([]);
  const [nombreGenre, setNombreGenre] = useState([])
  const [exito, setExito] = useState(null)
  const dispatch = useDispatch();

  
  console.log(generState);

  useEffect(() => {
      dispatch(getAllGenres());
    }, [dispatch]);

  const genre = useSelector((state) => state.genres);
  
  
  const handlerGeners = (event) => {
      const evento = event.target.value;
      const newGenerState = [...generState, evento];
      let uniqueArr = [...new Set(newGenerState)];
      setGenerState(uniqueArr);
      console.log(evento);
      const selectedGenre = genre.find(genre => genre.id === parseInt(evento));
      if (selectedGenre) {
    setNombreGenre(prevNombreGenre => [...prevNombreGenre, selectedGenre.name]);
  } else {
    setNombreGenre('');
  }
    }

    
    const handleSubmit = (event) => {
        event.preventDefault();
        const body = {
            name: event.target.name.value,
            description: event.target.description.value,
            platforms: event.target.platforms.value.split(","),
            background_image: event.target.background_image.value,
            released: event.target.released.value,
            rating: event.target.rating.value,
            generId: generState,
        };
    console.log(body);
    
    dispatch(createVideogame(body).then(response => {
        if (response.ok) {
          // Si la petición fue exitosa (código de estado HTTP 200 a 299)
          setExito(true)
          console.log(exito)
          // Aquí puedes hacer algo con la respuesta del servidor si lo necesitas
        } else {
          // Si la petición no fue exitosa
          setExito(true)
          console.log(exito)
          // Aquí puedes hacer algo con el mensaje de error que envió el servidor si lo necesitas
        }
      }));

};
const handleNameValidation = (e) => {
const value = e.target.value
  const regex = /^[a-zA-Z ]+$/;
   
   if ( regex.test(value)) {
    return false
   } else {
    
   }
}
  return (
      <form className="form-container" onSubmit={handleSubmit}>
        <h1 className="titulo">Crear Videojuego</h1>
      <label className="label">
        Name:
        <input onChange={(e)=>handleNameValidation(e)} autoComplete="off" className="input" type="text" name="name" />
      </label>
      <label className="label">
        Description:
        <input autoComplete="off" className="input" type="text" name="description" />
      </label>
      <label className="label">
        Platforms:
        <input autoComplete="off" className="input" type="text" name="platforms" />
      </label>
      <label className="label">
        Imagen:
        <input autoComplete="off" className="input" type="text" name="background_image" />
      </label>
      <label className="label">
        Released:
        <input autoComplete="off" className="input" type="text" name="released" />
      </label>
      <label className="label">
        Rating:
        <input autoComplete="off" className="input" type="text" name="rating" />
      </label>
      <label className="label">
        Genero: {nombreGenre.join(", ")}
        <select className="select"
          defaultValue={""}
          onChange={(e) => handlerGeners(e)}
        >
          <option className="op-form" disabled value={""}>
            elegir genero
          </option>
          {genre.map((genres) => (
            <option className="op-form" key={genres.id} name="genero" value={genres.id}>
              {genres.name}
            </option>
          ))}
        </select>
      </label>
      <button className="buttom-form" type="submit">Create User</button>
    </form>
  );
}
;
export default Form
