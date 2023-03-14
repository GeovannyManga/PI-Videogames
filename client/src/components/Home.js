import {} from "../styles/home.css";
import NavBar from "./NavBar";
import Cards from "../components/Cards.js";
import { useDispatch } from "react-redux";
import { getAllGenres } from "../redux/actions";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGenres());
  }, [dispatch]);

 

  return (
    <div className="div-home">
      <NavBar />
      <Cards />
    </div>
  );
};

export default Home;
