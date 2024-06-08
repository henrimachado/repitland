import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GiSnake } from "react-icons/gi";
import { EditSalesContainer } from "./EditSales.style";
import Input from "../../../components/Input/Input";

import Select from "../../../components/Select/Select";
import Head from "../../../Head";
import { Client } from "../../../services/models/Client";
import { Animal } from "../../../services/models/Animal";
import { User } from "../../../services/models/User";
import ClientsService from "../../../services/ClientsService";
import AnimalsService from "../../../services/AnimalsService";
import UsersService from "../../../services/UsersService";
import { Sale } from "../../../services/models/Sale";
import SalesService from "../../../services/SalesService";
import Snackbar from "awesome-snackbar";
import { ICreateSale } from "../../../services/interfaces/ICreateSale";

const EditSales = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [employees, setEmployees] = useState<User[]>([]);

  const [sale, setSale] = useState<Sale>();

  const [animal_id, setAnimalId] = useState<number>(0);
  const [client_id, setClientId] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [sold_by, setSoldBy] = useState<number>(89012345678);
  const [created_by, setCreatedBy] = useState<number>(89012345678);

  const [enviado, setEnviado] = useState<boolean>(false);
  const params = useParams();

  const fetchData = async () => {
    const clientsData = await ClientsService.getClients();
    const animalsData = await AnimalsService.getAnimals();
    const employeesData = await UsersService.getUsers();

    if (clientsData) {
      setClients(clientsData);
    }
    if (animalsData) {
      setAnimals(animalsData);
    }
    if (employeesData) {
      setEmployees(employeesData);
    }

    const saleData = await SalesService.getSaleById(Number(params.id));
    if (saleData) {
      setAnimalId(saleData.animal_id);
      setClientId(saleData.client_id);
      setSoldBy(saleData.sold_by);
      setPrice(saleData.price);
      setDiscount(saleData.discount);
      setCreatedBy(saleData.created_by);
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchData();
    }
  }, []);

  async function handleSubmit(e: any) {
    e.preventDefault();

    const updatedSale: ICreateSale = {
      animal_id,
      client_id: Number(client_id),
      price,
      discount,
      created_by: Number(created_by),
      sold_by: Number(sold_by),
    };

    try {
      await SalesService.updateSale(Number(params.id), updatedSale);
      new Snackbar(`Venda atualizada com <b>sucesso</b>`, {
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
      new Snackbar(`Falha ao atualizar venda: ${error}`, {
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
    <EditSalesContainer>
      <Head title={`Editar venda nº ${params.id}`} />

      <main className={`atualizacaoAdmin animeLeft`}>
        <form onSubmit={(e) => handleSubmit(e)}>
          {!enviado ? (
            <>
              <h2 id="title">Dados gerais</h2>
              <div id="c1" className={`conteudo aux`}>
                <div className="formsBloco">
                  <div className="formsSubBloco">
                    <Select
                      label="CPF do Cliente"
                      name="cpfCliente"
                      options={clients.map((client: Client) => client.cpf)}
                      value={client_id}
                      setValue={setClientId}
                    />
                  </div>
                  <div className="formsSubBloco">
                    <Select
                      label="Animal"
                      name="animal"
                      options={animals.map((animal: Animal) => animal.id)}
                      value={animal_id}
                      setValue={setAnimalId}
                    />
                    <Input
                      type="number"
                      step="0.01"
                      label="Valor"
                      name="valor"
                      value={price}
                      setValue={setPrice}
                      placeholder="R$ 0,00"
                    />
                  </div>
                </div>

                <div className={`formsBloco right`}>
                  <div className="formsSubBloco">
                    <Select
                      label="CPF do Vendedor"
                      name="cpfVendedor"
                      options={employees.map((employee: User) => employee.cpf)}
                      value={sold_by}
                      setValue={setSoldBy}
                    />
                  </div>
                  <div className="formsSubBloco">
                    <Input
                      label="Desconto"
                      name="email"
                      step="0.01"
                      type="number"
                      value={discount}
                      setValue={setDiscount}
                      placeholder="0,0"
                    />
                  </div>
                </div>
              </div>
              <div className="buttonsArea">
                <button className="voltar">
                  <Link to="/home/vendas">Cancelar</Link>
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
                <h2>Atualização concluída com sucesso!</h2>
                <Link to="/home" className="button">
                  Voltar à tela inicial
                </Link>
              </div>
            </>
          )}{" "}
        </form>
      </main>
    </EditSalesContainer>
  );
};

export default EditSales;
