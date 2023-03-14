import axios from "axios";
export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const GET_ALL_NAMES = "GET_ALL_NAMES";
export const ORDENAR_AZ = "ORDENAR_AZ";
export const ORDENAR_ZA = "ORDENAR_ZA";
export const GET_DETAIL = "GET_DETAIL";
export const FILTER_DB_INFO = 'FILTER_DB_INFO';
export const FILTER_API_INFO = 'FILTER_API_INFO';
export const GET_ALL_GENRES= 'FILTER_GENRES';
export const LOADER = "LOADER"
export const SET_GENRE_FILTER = "SET_GENRE_FILTER"
export const CREATE_VIDEOGAMES_SUCCESS = "CREATE_VIDEOGAMES_SUCCESS"


export const getAllVideogames = () => {
  return async function (dispatch) {
    return fetch("http://localhost:3001/videogames")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: GET_ALL_VIDEOGAMES, payload:data});
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
};

export const getAllName = (name) => {
  return async function (dispatch) {
    return fetch(`http://localhost:3001/videogames/name?name=${name}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: GET_ALL_NAMES, payload: data });
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
};


export const getAllGenres = () => {
  return async function (dispatch) {
    return fetch("http://localhost:3001/geners")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: GET_ALL_GENRES, payload:data});
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
};

export const ordenarAz = (state) => {
  const newState = state.slice(); // hacemos una copia del estado original
  return {
    type: ORDENAR_AZ,
    payload: newState.sort((a, b) => {
      return a.name?.localeCompare(b.name);
    }),
  };
};

export const ordenarZa = (state) => {
    const newState = state.slice(); // hacemos una copia del estado original
    return {
      type: ORDENAR_ZA,
      payload: newState.sort((a, b) => {
        return b.name?.localeCompare(a.name);
      }),
    };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    return fetch(`http://localhost:3001/videogames/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const datos = dispatch({ type: GET_DETAIL, payload: data });
        console.log(datos, "hola mundo");
      })
      .catch((error) => console.log(error));
  };
};



// // Definimos la acción
// export const filterDbInfo = (state) => ({
//   type: FILTER_DB_INFO,
//   payload:  state.filter(obj => obj.hasOwnProperty('source'))
// });


export const filterDbInfo = () => {
  return async function (dispatch) {
    return fetch("http://localhost:3001/videogames")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: FILTER_DB_INFO, payload: data.filter(obj => obj.hasOwnProperty('source'))});
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
};

// // Definimos la acción
// export const filterApiInfo = (state) => ({
//   type: FILTER_API_INFO,
//   payload:  state.filter(obj =>  !obj.hasOwnProperty('source'))
// });

export const filterApiInfo = () => {
  return async function (dispatch) {
    return fetch("http://localhost:3001/videogames")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: FILTER_API_INFO, payload: data.filter(obj => !obj.hasOwnProperty('source'))});
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
};

// Definimos la acción
export const loader = (value) => ({
  type: LOADER,
  payload:  value
});


 export const setGenreFilter = (value) => {
    return {
      type: 'SET_GENRE_FILTER',
      payload: value

    }
  
}



export const createVideogame = (body) => {
  return (dispatch) => {
    // Enviar solicitud HTTP POST a la API para crear un usuario
    axios.post('http://localhost:3001/videogames', body)
      .then(response => {
        // Actualizar el estado de Redux con los datos del usuario creado
        dispatch({
          type: 'CREATE_VIDEOGAMES_SUCCESS',
          payload: response.data
        });
      })
      .catch(error => {
        // Manejar errores
        dispatch({
          type: 'CREATE_VIDEOGAMES_ERROR',
          payload: error
        });
      });
  }
}
