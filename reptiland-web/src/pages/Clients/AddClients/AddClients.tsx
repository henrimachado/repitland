import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiSnake } from "react-icons/gi";
import { AddClientsContainer } from "./AddClients.style";
import Input from "../../../components/Input/Input";
import Head from "../../../Head";
import { Client } from "../../../services/models/Client";
import ClientsService from "../../../services/ClientsService";
import Snackbar from "awesome-snackbar";

const AddClients = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [cpf, setCPF] = useState<number>(0o0);
  const [email, setEmail] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");

  const [enviado, setEnviado] = useState<boolean>(false);

  async function handleSubmit(e: any) {
    e.preventDefault();

    const newClient: Client = {
      cpf: Number(cpf),
      name,
      phone_number: phone,
      email,
      birthday,
      avatar: "",
    };

    try {
      await ClientsService.createClient(newClient);
      new Snackbar(`Cliente cadastrado com <b>sucesso</b>`, {
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
      new Snackbar(`Falha ao cadastrar cliente: ${error}`, {
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
    <AddClientsContainer>
      <Head title={"Cadastrar cliente"} />

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
                      placeholder="Nome do cliente"
                      required
                    />
                  </div>
                  <div className="formsSubBloco">
                    <Input
                      label="Telefone"
                      type="text"
                      name="telefone"
                      value={phone}
                      setValue={setPhone}
                      placeholder="(00) 0 0000-0000"
                      required
                    />
                  </div>
                </div>

                <div className={`formsBloco right`}>
                  <div className="formsSubBloco">
                    <Input
                      label="Aniversário"
                      type="date"
                      name="aniversario"
                      value={birthday}
                      setValue={setBirthday}
                      required
                    />

                    <Input
                      type="text"
                      label="CPF"
                      name="cpf"
                      value={cpf}
                      setValue={setCPF}
                      placeholder="000.000.000-00"
                      required
                    />
                  </div>
                  <div className="formsSubBloco">
                    <Input
                      label="E-mail"
                      name="email"
                      type="email"
                      value={email}
                      setValue={setEmail}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="buttonsArea">
                <button className="voltar">
                  <Link to="/home/clientes">Cancelar</Link>
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
    </AddClientsContainer>
  );
};

export default AddClients;
