import React, { useContext, useState } from "react";

import Input from "../../components/Input/Input";
import dogHome from "../../media/snake.png";
import logo from "../../media/logo3.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Head from "../../Head";
import { LoginContainer, Politica } from "./Login.style";
import { GlobalContext } from "../../context/GlobalStorage";
import { UserCredentials } from "../../services/models/UserCredentials";
import LoginService from "../../services/LoginService";
import { HiInformationCircle } from "react-icons/hi";
import Snackbar from "awesome-snackbar";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassowrd] = useState("");
  const [error, setError] = useState(false);

  const { loggedUser, setLoggedUser } = useContext(GlobalContext);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (window.localStorage.getItem("loggedUser")) {
      setLoggedUser(
        JSON.parse(window.localStorage.getItem("loggedUser") as string)
      );
    }
  }, []);

  React.useEffect(() => {
    if (loggedUser) {
      window.location.href = `http://localhost:5000/login/${loggedUser.cpf}`;
    }
  }, [loggedUser]);

  async function handleClick() {
    const userCredentials: UserCredentials = {
      username,
      password,
    };

    try {
      const user = await LoginService.login(userCredentials);

      if (user) {
        setLoggedUser(user);
        window.localStorage.setItem("loggedUser", JSON.stringify(user));
      } else {
        setError(true);
      }
      new Snackbar(`Login realizado com <b>sucesso</b>`, {
        theme: "success",
        position: "bottom-center",
        timeout: 3000,
        style: {
          container: [
            ["background-color", "#368F8B"],
            ["border-radius", "4px"],
          ],
          message: [["color", "#FFF"]],
        },
      });
    } catch (error) {
      new Snackbar(`Falha ao realizar login.<br>${error}`, {
        theme: "error",
        position: "bottom-center",
        timeout: 3000,
        style: {
          container: [
            ["background-color", "rgb(255, 61, 31)"],
            ["border-radius", "4px"],
          ],
          message: [["color", "#FFF"]],
        },
      });
    }
  }

  React.useEffect(() => {
    setError(false);
  }, [username, password]);

  return (
    !loggedUser && (
      <LoginContainer>
        <Head title="Login" />
        <div className="login">
          <main>
            <div className="title titlelogin">
              <img src={logo} alt="Logo Reptilândia" />
              <p>
                Faça login com as informações fornecidas durante seu cadastro.
              </p>
            </div>
            <form onSubmit={(event) => event.preventDefault()}>
              {error && (
                <div className={`error animeLeft`}>
                  *Login ou senha invalidos
                </div>
              )}
              <Input
                label="E-mail"
                name="email"
                type="text"
                value={username}
                setValue={setUsername}
                placeholder="username"
              />
              <Input
                name="senha"
                label="Senha"
                type="password"
                value={password}
                setValue={setPassowrd}
                placeholder="********"
              />
              <button style={{ marginTop: "2rem" }} onClick={handleClick}>
                Entrar
              </button>
            </form>
            <Politica href="http://localhost:5000/politica">
              <p>Veja as Políticas de Segurança</p>
              <HiInformationCircle />
            </Politica>
          </main>
          <img src={dogHome} alt="Uma cobra preta e branca" />
        </div>
      </LoginContainer>
    )
  );
};

export default Login;
