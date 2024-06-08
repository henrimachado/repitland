import React, { useContext, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import MenuItem from "../../components/MenuItem/MenuItem";
import { GiSandSnake } from "react-icons/gi";
import { HiUsers } from "react-icons/hi";
import { BsCoin } from "react-icons/bs";
import { PainelAdminContainer } from "./PainelAdmin.style";
import { RiAdminFill } from "react-icons/ri";
import Head from "../../Head";
import { GlobalContext } from "../../context/GlobalStorage";

const PainelAdmin = () => {
  const { loggedUser } = useContext(GlobalContext);
  const location = useLocation();

  useEffect(() => {
    if (window.location.protocol === "https:") {
      window.location.href = `http://localhost:5000${location.pathname}`;
    }
  }, [location]);

  return window.location.protocol === "http:" ? (
    <PainelAdminContainer>
      <Head title="Home" />
      <div className="container">
        <div className="cards animeLeft">
          <Link to="https://localhost:5001/home/animais">
            <MenuItem title="Animais" icon={<GiSandSnake className="icon" />} />
          </Link>
          <Link to="https://localhost:5001/home/clientes">
            <MenuItem title="Clientes" icon={<HiUsers className="icon" />} />
          </Link>
          <Link to="https://localhost:5001/home/vendas">
            <MenuItem title="Vendas" icon={<BsCoin className="icon" />} />
          </Link>
          {loggedUser?.user_type_id === 1 && (
            <Link to="https://localhost:5001/home/users">
              <MenuItem
                title="Usuários"
                icon={<RiAdminFill className="icon" />}
              />
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </PainelAdminContainer>
  ) : null;
};

export default PainelAdmin;
