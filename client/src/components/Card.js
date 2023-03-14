import {} from "../styles/card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDetail } from "../redux/actions";
import notfount from "../assets/notfount.png";


const Card = ({ img, name, generos, id, ID }) => {

    

  const dispatch = useDispatch();
  const handlerDetail = () => {
    dispatch(getDetail(ID||id));
  };
  console.log(generos);
  return (
    <Link key={id}   onClick={handlerDetail} className="link-card" to={`/detail`}>
      <div  className="div-card">
        {<img className="img-card" src={img ? img : notfount} alt={name} />}
        <span className="span-card">{name}</span>
        <p className="p-card">Generos:</p>
        {generos?.map((el) => (
          <p key={el.id} >{el.name}</p>
        ))}
      </div>
    </Link>
  );
};

export default Card;
