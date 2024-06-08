import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiSnake } from "react-icons/gi";
import Input from "../../../components/Input/Input";
import Head from "../../../Head";
import { AddUserContainer } from "./AddUser.style";
import Select from "../../../components/Select/Select";
import { User } from "../../../services/models/User";
import UsersService from "../../../services/UsersService";
import Snackbar from "awesome-snackbar";
import { ICreateUser } from "../../../services/interfaces/ICreateUser";

const AddUser = () => {
  const [cpf, setCPF] = useState<number>(0);
  const [newPassword, setNewPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [userType, setUserType] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const [enviado, setEnviado] = useState<boolean>(false);

  async function handleSubmit(e: any) {
    e.preventDefault();

    const newUser: ICreateUser = {
      cpf: Number(cpf), 
      username,
      password: newPassword,
      userTypeId: Number(userType),
      name,
      phoneNumber
    };

    try {
      await UsersService.createUser(newUser);
      new Snackbar(`Usuário cadastrado com <b>sucesso</b>`, {
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
      setEnviado(true);
    } catch (error) {
      new Snackbar(`Falha ao cadastrar usuário: ${error}`, {
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
  return (
    <AddUserContainer>
      <Head title={"Cadastrar usuário"} />

      <main className={`atualizacaoAdmin animeLeft`}>
        <form onSubmit={(e) => handleSubmit(e)}>
          {!enviado ? (
            <>
              <h2 id="title">Dados gerais</h2>
              <div id="c1" className={`conteudo aux`}>
                <div className="formsBloco">
                  <div className="formsSubBloco">
                    <Input
                      label="Nome"
                      name="nome"
                      type="text"
                      value={name}
                      setValue={setName}
                      placeholder="Nome do usuário"
                      required
                    />
                    
                  </div>
                  <div className="formsSubBloco">
                    <Input
                      label="Username"
                      name="username"
                      type="text"
                      value={username}
                      setValue={setUsername}
                      required
                      placeholder="username"
                    />
                    <Select
                      label="Tipo de usuário"
                      name="usertype"
                      options={[1, 2]}
                      value={userType}
                      setValue={setUserType}
                      required
                    />
                    
                  </div>
                </div>

                <div className={`formsBloco right`}>
                  <div className="formsSubBloco">
                    <Input
                      type="text"
                      label="CPF"
                      name="cpf"
                      value={cpf}
                      setValue={setCPF}
                      placeholder="000.000.000-00"
                      required
                    />
                    <Input
                      label="Telefone"
                      type="text"
                      name="telefone"
                      value={phoneNumber}
                      setValue={setPhoneNumber}
                      placeholder="(00) 0 0000-0000"
                      required
                    />
                  </div>
                  <div className="formsSubBloco">
                  <Input
                      label="Senha"
                      name="senha"
                      type="password"
                      value={newPassword}
                      setValue={setNewPassword}
                      required
                      placeholder="***********"
                      pattern={`/^(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&()_+-=[]{};':"\|,.<>/?]).{8,}$/`}
                    />

                  </div>
                </div>
              </div>
              <div className="buttonsArea">
                <button className="voltar">
                  <Link to="/home/users">Cancelar</Link>
                </button>
                <button>
                  <a>Cadastrar</a>
                </button>
              </div>
            </>
          ) : (
            <>
              <div id="c3" className={`concluido aux`}>
                <GiSnake size={"100px"} />
                <h2>Cadastro concluído com sucesso!</h2>
                <Link to="/home" className="button">
                  Voltar à tela inicial
                </Link>
              </div>
            </>
          )}{" "}
        </form>
      </main>
    </AddUserContainer>
  );
};

export default AddUser;
