import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GiSnake } from "react-icons/gi";
import { EditClientsContainer } from "./EditClient.style";
import Input from "../../../components/Input/Input";
import Head from "../../../Head";
import { Client } from "../../../services/models/Client";
import ClientsService from "../../../services/ClientsService";
import Snackbar from "awesome-snackbar";

const EditClient = () => {
  const params = useParams();

  const [client, setClient] = useState<Client>();

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [cpf, setCPF] = useState<number>();
  const [email, setEmail] = useState<string>("");
  const [birthday, setBirthday] = useState<string>();

  const [enviado, setEnviado] = useState<boolean>(false);

  useEffect(() => {
    if (params.id) {
      const fetchData = async () => {
        const client = await ClientsService.getClientById(Number(params.id));
        setClient(client);
        setName(client.name);
        setPhone(client.phone_number);
        setCPF(client.cpf);
        setEmail(client.email);
        setBirthday(client.birthday.split("T")[0]);
      };
      fetchData();
    }
  }, []);

  async function handleSubmit(e: any) {
    e.preventDefault();

    const updateClient = {
      ...client,
      name,
      phone_number: phone,
      cpf: Number(cpf),
      email,
      birthday,
    };

    try {
      await ClientsService.updateClient(Number(params.id), updateClient);
      new Snackbar(`Cliente atualizado com <b>sucesso</b>`, {
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
      new Snackbar(`Falha ao atualizar cliente: ${error}`, {
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
    <EditClientsContainer>
      <Head title={`Editar cliente: ${name}`} />

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
                      placeholder="Nome do Adotante"
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
                    />

                    <Input
                      type="text"
                      label="CPF"
                      name="cpf"
                      value={cpf}
                      setValue={setCPF}
                      placeholder="000.000.000-00"
                    />
                  </div>
                  <div className="formsSubBloco">
                    <Input
                      label="E-mail"
                      name="email"
                      type="email"
                      value={email}
                      setValue={setEmail}
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
    </EditClientsContainer>
  );
};

export default EditClient;
