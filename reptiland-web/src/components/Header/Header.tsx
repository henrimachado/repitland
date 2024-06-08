import React, { useContext } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../../media/logo3.svg";
import { GlobalContext } from "../../context/GlobalStorage";
import { HeaderContainer } from "./Header.style";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { FaHouse } from "react-icons/fa6";
import { HiInformationCircle } from "react-icons/hi";
import { User } from "../../services/models/User";

const Header = () => {
  const navigate = useNavigate();
  const global = useContext(GlobalContext);

  const handleExit = () => {
    global.setLoggedUser(null);
    if (window.location.protocol === "https:") {
      window.localStorage.removeItem("loggedUser");
    } else {
      window.localStorage.removeItem("loggedUser");
      window.location.href = `https://localhost:5001/logout`;
    }
  };

  return (
    <HeaderContainer>
      <header className="headerAdmin">
        <div className="headerContent">
          <Link to="">
            <img src={logo} alt="Logo Reptilândia" />
          </Link>
          <p>{global.title}</p>
          <div className="buttonsArea">
            <Link to="http://localhost:5000/politica/true">
              <HiInformationCircle className="icons iconHome" />
            </Link>
            <Link to="">
              <FaHouse className="icons iconHome" />
            </Link>
            <Link to="/" className="buttonLogout" onClick={handleExit}>
              <RiLogoutBoxRFill className="icons iconLogout" />
            </Link>
          </div>
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </HeaderContainer>
  );
};

export default Header;
