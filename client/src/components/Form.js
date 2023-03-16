import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createVideogame, getAllGenres } from "../redux/actions.js";
import { useHistory } from "react-router-dom";
import {} from "../styles/form.css";

const Form = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [generState, setGenerState] = useState([]);
  const [nombreGenre, setNombreGenre] = useState([]);
  const [styleError, setEstyleError] = useState("");
  const [error, setError] = useState({
    name: "",
    description: "",
    platforms: "",
    image: "",
    released: "",
    rating: "",
  });

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
    const selectedGenre = genre.find((genre) => genre.id === parseInt(evento));

    if (!nombreGenre.includes(selectedGenre.name)) {
      setNombreGenre([...nombreGenre, selectedGenre.name]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      name: event.target.name.value,
      description: event.target.description.value,
      platforms: event.target.platforms.value.split(", "),
      background_image: event.target.background_image.value,
      released: event.target.released.value,
      rating: event.target.rating.value,
      generId: generState,
    };
    console.log(body);

    if (
      !error.name &&
      body.name.length >= 2 &&
      !error.description &&
      body.description >= 2 &&
      !error.image &&
      body.background_image >= 2 &&
      !error.platforms &&
      body.platforms >= 2 &&
      !error.rating &&
      body.rating >= 2 &&
      !error.released &&
      body.released >= 2
    ) {
      dispatch(createVideogame(body));
      history.push("/home");
    } else {
      alert("Debes rellenar todos los campos");
    }
  };

  const validateName = (event) => {
    const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+([\s-][a-zA-ZÀ-ÖØ-öø-ÿ]+)*$/;
    let name = event.target.value;
    if (!regex.test(name)) {
      setError({ ...error, name: "error-name" });
      console.log(error);
      setEstyleError("-error");
      return styleError;
    } else {
      setError({ ...error, name: "" });
    }
  };

  const validateDescription = (event) => {
    const regex = /^[a-zA-Z0-9\u00F1\s]*$/;
    let description = event.target.value;
    if (!regex.test(description)) {
      setError({ ...error, description: "error-description" });
      console.log(error);
      setEstyleError("-error");
      return styleError;
    } else {
      setError({ ...error, description: "" });
    }
  };

  const validateReleased = (event) => {
    const regex = /^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
    let released = event.target.value;
    if (!regex.test(released)) {
      setError({ ...error, released: "error-released" });
      console.log(error);
      setEstyleError("-error");
      return styleError;
    } else {
      setError({ ...error, released: "" });
    }
  };
  // ^[0-5](\.[0-9])?$

  const validateRating = (event) => {
    const regex = /^[0-5](\.[0-9])?$/;
    let rating = event.target.value;
    if (!regex.test(rating)) {
      setError({ ...error, rating: "error-rating" });
      console.log(error);
      setEstyleError("-error");
      return styleError;
    } else {
      setError({ ...error, rating: "" });
    }
  };

  const validatePlatfomrs = (event) => {
    const regex = /^[a-zA-Z0-9\s]*$/;
    let platforms = event.target.value;
    if (!regex.test(platforms)) {
      setError({ ...error, platforms: "error-platforms" });
      console.log(error);
      setEstyleError("-error");
      return styleError;
    } else {
      setError({ ...error, platforms: "" });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <h1 className="titulo">Create Videogames</h1>
        <label className="label">
          Name:
          <input
            onChange={validateName}
            autoComplete="off"
            className={`input${
              error.name === "error-name" && styleError === "-error"
                ? styleError
                : ""
            }`}
            type="text"
            name="name"
          />
          {error.name === "error-name" && (
            <p className="p-error">El nombre no es valido</p>
          )}
        </label>
        <label className="label">
          Description:
          <textarea
            onChange={validateDescription}
            autoComplete="off"
            className={`input${
              error.description === "error-description" &&
              styleError === "-error"
                ? styleError
                : ""
            }`}
            type="text"
            name="description"
          />
          {error.description === "error-description" && (
            <p className="p-error">la description no es valido</p>
          )}
        </label>
        <label className="label">
          Platforms:
          <input
            onChange={validatePlatfomrs}
            autoComplete="off"
            className={`input${
              error.platforms === "error-platforms" && styleError === "-error"
                ? styleError
                : ""
            }`}
            type="text"
            name="platforms"
          />
          {error.platforms === "error-platforms" && (
            <p className="p-error">la plataforma no es valida</p>
          )}
        </label>
        <label className="label">
          Imagen:
          <input
            autoComplete="off"
            className="input"
            type="text"
            name="background_image"
          />
          {error.image === "error-image" && (
            <p className="p-error">Url no es valida</p>
          )}
        </label>
        <label className="label">
          Released:
          <input
            placeholder="example: 1999-12-01"
            onChange={validateReleased}
            autoComplete="off"
            className={`input${
              error.released === "error-released" && styleError === "-error"
                ? styleError
                : ""
            }`}
            type="text"
            name="released"
          />
          {error.released === "error-released" && (
            <p className="p-error"> fecha de lanzamiento no valida</p>
          )}
        </label>
        <label className="label">
          Rating:
          <input
            placeholder="example: 4.5"
            onChange={validateRating}
            autoComplete="off"
            className={`input${
              error.rating === "error-rating" && styleError === "-error"
                ? styleError
                : ""
            }`}
            type="text"
            name="rating"
          />
          {error.rating === "error-rating" && (
            <p className="p-error"> rating no valida</p>
          )}
        </label>
        <label className="label">
          Genres: {nombreGenre.join(", ")}
          <select
            className="select"
            defaultValue={""}
            onChange={(e) => handlerGeners(e)}
          >
            <option className="op-form" disabled value={""}>
              Select Genres:
            </option>
            {genre.map((genres) => (
              <option
                className="op-form"
                key={genres.id}
                name="genero"
                value={genres.id}
              >
                {genres.name}
              </option>
            ))}
          </select>
        </label>
        <button className="buttom-form" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};
export default Form;
