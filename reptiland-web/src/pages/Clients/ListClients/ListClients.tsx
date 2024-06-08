import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Filter from "../../../components/Filter/Filter";
import Table from "../../../components/Table/Table";
import { IoAddOutline } from "react-icons/io5";
import { ActionsContainer, ListClientsContainer } from "./ListClients.style";
import Head from "../../../Head";
import { Client } from "../../../services/models/Client";
import ClientsService from "../../../services/ClientsService";
import Snackbar from "awesome-snackbar";

const ListClients = () => {
  const navigate = useNavigate();

  const [clients, setClients] = useState<Client[]>();

  const [filter, setFilter] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Client[]>([]);

  const headers = ["CPF", "Nome", "Aniversário", "Email", "Telefone", "Ações"];
  const dataKeys = [
    "cpfFormatado",
    "name",
    "birthday",
    "email",
    "phone_number",
  ];

  function onEdit(item: any) {
    navigate(`editar/${item.cpf}`);
  }

  async function onDelete(item: any) {
    if (window.confirm("Tem certeza que deseja excluir esse cliente?")) {
      try {
        await ClientsService.deleteClient(item.cpf);
        await fetchData();
        new Snackbar(`Cadastro excluído com <b>sucesso</b>`, {
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
        new Snackbar(`Falha ao excluir cadastro: ${error}`, {
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
  }

  const fetchData = async () => {
    const clientsData = await ClientsService.getClients();
    if (clientsData) {
      setClients(clientsData);
      setFilteredData(clientsData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function formatData(data: Client[]) {
    return data.map((item) => {
      return {
        ...item,
        birthday: new Date(item.birthday).toLocaleDateString("pt-BR"),
        cpfFormatado: item.cpf
          .toString()
          .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"),
      };
    });
  }

  useEffect(() => {
    if (filter.length >= 3 && clients) {
      const filtered = clients.filter((item: Client) => {
        return (
          item.name.toLowerCase().includes(filter.toLowerCase()) ||
          item.cpf.toString().includes(filter.toLowerCase())
        );
      });
      setFilteredData(filtered);
      return;
    }
    if (filter.length === 0 && clients) {
      setFilteredData(clients);
      return;
    }
  }, [filter, clients]);

  return (
    <ListClientsContainer>
      <Head title="Clientes" />
      <main className={`animeLeft`}>
        <ActionsContainer>
          <Filter filter={filter} setFilter={setFilter} />
          <Link to="adicionar">
            <IoAddOutline className="addBtn" />
          </Link>
        </ActionsContainer>
        <Table
          headers={headers}
          dataKeys={dataKeys}
          data={formatData(filteredData)}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </main>
    </ListClientsContainer>
  );
};

export default ListClients;
