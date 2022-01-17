import "./home.scss"
//import {AcUnit} from "@material-ui/icons";
import dunePoster from  "../../assets/films/dune-poster.png"
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <img src={dunePoster} alt="poster du film dune"/>
        </div>
    )
}

export default Home