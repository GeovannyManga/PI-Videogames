import { useSelector } from "react-redux"
import {  } from "../styles/detail.css";
import { Link } from "react-router-dom";


const Detail = ()=>{
const state = useSelector(state => state.detail)
const description = state.description || ''; // Add null check
  const alterate = description.replace(/<[^>]+>/g, '')
    return(
        <div className="div-container-detail"  key={state.ID || state.id}>
            <Link className="back" to="/home">Back</Link>
            <img className="img-detail" src={state.background_image} alt="perfil" />
            <h1 className="h1-detail">{state.name}</h1>
            <p className="description-detail" >{alterate}</p>
            <p className="released-detail">{state.released}</p>
            {state.genres?.map(el => <p>{el.name}</p>)}
        </div>
    )
}

export default Detail