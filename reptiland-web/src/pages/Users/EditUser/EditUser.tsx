import React, { useEffect, useState } from "react";
import Snackbar from "awesome-snackbar";
import { Link, useParams } from "react-router-dom";
import { GiSnake } from "react-icons/gi";
import Input from "../../../components/Input/Input";
import Head from "../../../Head";
import Select from "../../../components/Select/Select";
import { EditUserContainer } from "./EditUser.style";
import { User } from "../../../services/models/User";
import ClientsService from "../../../services/ClientsService";
import UsersService from "../../../services/UsersService";

const EditUser = () => {
  const params = useParams();

  const [user, setUser] = useState<User>();
  const [cpf, setCPF] = useState<number>();
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  const [oldPassword, setOldPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [userType, setUserType] = useState<number>();
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const [enviado, setEnviado] = useState<boolean>(false);

  useEffect(() => {
    if (params.id) {
      const fetchData = async () => {
        const user = await UsersService.getUserById(Number(params.id));
        setUser(user);
        setCPF(user.cpf);
        setUsername(user.username);
        setName(user.name);
        setUserType(user.user_type_id);
        setPhoneNumber(user.phone_number);
      };
      fetchData();
    }
  }, []);

  async function handleSubmit(e: any) {
    e.preventDefault();

    const updatedUser = {
      ...user,
      name,
      cpf,
      username,
      phoneNumber: phoneNumber,
      userTypeId: userType,
      oldPassword,
      newPassword,
      confirmNewPassword,
    };

    try {
      await UsersService.updateUser(Number(params.id), updatedUser);
      new Snackbar(`Usuário atualizado com <b>sucesso</b>`, {
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
      new Snackbar(`Falha ao atualizar usuário: ${error}`, {
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
    <EditUserContainer>
      <Head title={`Editar usuário: ${name}`} />

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
                    />
                    <Select
                      label="Tipo de usuário"
                      name="usertype"
                      options={[1, 2]}
                      value={userType}
                      setValue={setUserType}
                    />
                  </div>
                  <div className="formsSubBloco">
                    <Input
                      label="Username"
                      name="username"
                      type="text"
                      value={username}
                      setValue={setUsername}
                      placeholder="username"
                    />

                    <Input
                      label="Senha antiga"
                      name="senha"
                      type="password"
                      value={oldPassword}
                      setValue={setOldPassword}
                      placeholder="***********"
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
                    />
                    <Input
                      label="Telefone"
                      type="text"
                      name="telefone"
                      value={phoneNumber}
                      setValue={setPhoneNumber}
                      placeholder="(00) 0 0000-0000"
                    />
                  </div>
                  <div className="formsSubBloco">
                    <Input
                      label="Nova senha"
                      name="senha"
                      type="password"
                      value={newPassword}
                      setValue={setNewPassword}
                      placeholder="***********"
                    />
                    <Input
                      label="Confirmação nova senha"
                      name="senha"
                      type="password"
                      value={confirmNewPassword}
                      setValue={setConfirmNewPassword}
                      placeholder="***********"
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
                <h2>Usuário atualizado com sucesso!</h2>
                <Link to="/home" className="button">
                  Voltar à tela inicial
                </Link>
              </div>
            </>
          )}{" "}
        </form>
      </main>
    </EditUserContainer>
  );
};

export default EditUser;
