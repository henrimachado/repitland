import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Filter from "../../../components/Filter/Filter";
import Head from "../../../Head";
import Table from "../../../components/Table/Table";
import { IoAddOutline } from "react-icons/io5";
import { ActionsContainer, ListUsersContainer } from "./ListUsers.style";
import { User } from "../../../services/models/User";
import UsersService from "../../../services/UsersService";
import Snackbar from "awesome-snackbar";

const ListUsers = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState<User[]>();

  const [filter, setFilter] = useState<string>("");
  const [filteredData, setFilteredData] = useState<User[]>([]);

  const headers = [
    "CPF",
    "Nome",
    "Username",
    "Telefone",
    "Tipo de usuário",
    "Ações",
  ];
  const dataKeys = [
    "cpfFormatado",
    "name",
    "username",
    "phone_number",
    "user_type_id",
  ];

  function onEdit(item: any) {
    navigate(`editar/${item.cpf}`);
  }

  async function onDelete(item: any) {
    if (window.confirm("Tem certeza que deseja excluir esse usuário?")) {
      try {
        await UsersService.deleteUser(Number(item.cpf));
        await fetchData();
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
  }

  const fetchData = async () => {
    const userData = await UsersService.getUsers();
    if (userData) {
      setUsers(userData);
      setFilteredData(userData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function formatData(data: User[]) {
    return data.map((item) => {
      return {
        ...item,
        cpfFormatado: item.cpf
          .toString()
          .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"),
      };
    });
  }

  useEffect(() => {
    if (filter.length >= 0 && users) {
      const filtered = users.filter((item: User) => {
        return (
          item.name.toString().includes(filter) ||
          item.cpf.toString().includes(filter)
        );
      });
      setFilteredData(filtered);
      return;
    }
    if (filter.length === 0 && users) {
      setFilteredData(users);
      return;
    }
  }, [filter, users]);

  return (
    <ListUsersContainer>
      <Head title="Usuários" />
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
    </ListUsersContainer>
  );
};

export default ListUsers;
