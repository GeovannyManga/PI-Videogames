import {  } from "../styles/welcome.css";
import { Link } from "react-router-dom";


const Welcome = ()=>{
    return(
       <div className="fondo-welcome">
        <h1 className="h1-welcome">It's time to play</h1>
        <Link className="link-welcome" to="/home" ><button className="button-welcome" >Get started</button></Link>
       </div>
    );
}

export default Welcome