import "./navbar.scss"
import logo from '../../assets/logo/plain-logo-netflix.png';
import {ArrowDropDown, Notifications, Search} from "@material-ui/icons";
import {useState} from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

  return (
      <div className="navbar">
          <div className="container">
              <div className="left">
                  <img src={logo} alt="logo de netflix"/>
                  <span>Accueil</span>
                  <span>Series</span>
                  <span>Films</span>
                  <span>Nouveau et populaire</span>
                  <span>Ma liste</span>
              </div>
              <div className="right">
                  <Search className="icon"/>
                  <span>Enfants</span>
                  <Notifications className="icon"/>
                  <div className="profile">
                      <ArrowDropDown className="icon"/>
                      <div className="options">
                          <span>Paramétres</span>
                          <span>Déconnexion</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Navbar