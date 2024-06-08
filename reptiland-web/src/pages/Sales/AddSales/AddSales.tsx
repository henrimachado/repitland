import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiSnake } from "react-icons/gi";
import { AddSalesContainer } from "./AddSales.style";
import Input from "../../../components/Input/Input";
import Select from "../../../components/Select/Select";
import Head from "../../../Head";
import { Client } from "../../../services/models/Client";
import { Animal } from "../../../services/models/Animal";
import { User } from "../../../services/models/User";
import ClientsService from "../../../services/ClientsService";
import AnimalsService from "../../../services/AnimalsService";
import UsersService from "../../../services/UsersService";
import Snackbar from "awesome-snackbar";
import { Sale } from "../../../services/models/Sale";
import SalesService from "../../../services/SalesService";
import { ICreateSale } from "../../../services/interfaces/ICreateSale";
import { GlobalContext } from "../../../context/GlobalStorage";


const AddSales = () => {

  const {loggedUser} = useContext(GlobalContext);
  const [animal_id, setAnimalId] = useState<number>(0);
  const [client_id, setClientId] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [created_by, setCreatedBy] = useState<number>(11111111111);
  const [sold_by, setSoldBy] = useState<number>(89012345678);

  const [clients, setClients] = useState<Client[]>([]);
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [employees, setEmployees] = useState<User[]>([]);

  const [enviado, setEnviado] = useState<boolean>(false);


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
  };

  useEffect(() => {
    fetchData();
  }, []);




 async function handleSubmit(e: any) {
    e.preventDefault();
    
    const newSale: ICreateSale = {
      animal_id,
      client_id,
      price,
      discount,
      created_by: Number(loggedUser?.cpf) || created_by ,
      sold_by
    };

    try {
      await SalesService.createSale(newSale);
      new Snackbar(`Animal cadastrado com <b>sucesso</b>`, {
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
      new Snackbar(`Falha ao cadastrar animal: ${error}`, {
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
    <AddSalesContainer>
      <Head title={"Cadastrar venda"} />

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
                      required
                    />
                  </div>
                  <div className="formsSubBloco">
                    <Select
                      label="Animal"
                      name="animal"
                      options={animals.map((animal: Animal) => animal.id)}
                      value={animal_id}
                      setValue={setAnimalId}
                      required
                    />
                    <Input
                      type="number"
                      step="0.01"
                      label="Valor"
                      name="valor"
                      value={price}
                      setValue={setPrice}
                      placeholder="R$ 0,00"
                      required
                    />
                  </div>
                </div>

                <div className={`formsBloco right`}>
                  <div className="formsSubBloco">
                    <Select
                      label="CPF do Vendedor"
                      name="cpfVendedor"
                      options={employees.map(
                        (employee: User) => employee.cpf
                      )}
                      value={sold_by}
                      setValue={setSoldBy}
                      required
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
                      required
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
                <GiSnake  size={"100px"} />
                <h2>Cadastro concluído com sucesso!</h2>
                <Link to="/home" className="button">
                  Voltar à tela inicial
                </Link>
              </div>
            </>
          )}{" "}
        </form>
      </main>
    </AddSalesContainer>
  );
};

export default AddSales;
