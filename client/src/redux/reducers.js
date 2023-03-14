import {
  GET_ALL_NAMES,
  GET_ALL_VIDEOGAMES,
  ORDENAR_AZ,
  ORDENAR_ZA,
  GET_DETAIL,
  FILTER_DB_INFO,
  GET_ALL_GENRES,
  FILTER_API_INFO,
  LOADER,
  SET_GENRE_FILTER,
} from "./actions";

const initialState = {
  data: [],
  genres: [],
  detail: [],
  currentPage: 1,
  totalPages: 0,
  items: 15,
  loader: true,
  dataCopy: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        data: action.payload,
        dataCopy: action.payload,
        totalPages: Math.ceil(action.payload.length / 15),
      };
    case GET_ALL_NAMES:
      return {
        ...state,
        data: action.payload,
      };
    case GET_ALL_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case ORDENAR_AZ:
      return {
        ...state,
        data: action.payload,
      };
    case ORDENAR_ZA:
      return {
        ...state,
        data: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case FILTER_DB_INFO:
      return {
        ...state,
        data: action.payload,
      };
    case FILTER_API_INFO:
      return {
        ...state,
        data: action.payload,
      };
    case LOADER:
      return {
        ...state,
        loader: action.payload,
      };
    case SET_GENRE_FILTER:
      return {
        ...state,
        data: state.dataCopy.filter((e) => e.genres.some((genre) => genre.name === action.payload))
      };
    default:
      return state;
  }
};

export default reducer;
