import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Filter from "../../../components/Filter/Filter";
import Table from "../../../components/Table/Table";
import { IoAddOutline } from "react-icons/io5";
import { ActionsContainer, ListAnimalsContainer } from "./ListAnimals.style";
import Head from "../../../Head";
import AnimalsService from "../../../services/AnimalsService";
import { Animal } from "../../../services/models/Animal";
import Snackbar from "awesome-snackbar";

const ListAnimals = () => {
  const navigate = useNavigate();

  const [animals, setAnimals] = useState<Animal[]>();

  const [filter, setFilter] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Animal[]>([]);

  const headers = ["Id", "Nome", "Espécie", "Idade", "Valor (R$)", "Ações"];
  const dataKeys = ["id", "name", "species", "age", "price"];

  function onEdit(item: any) {
    navigate(`editar/${item.id}`);
  }

  async function onDelete(item: any) {
    if (window.confirm("Tem certeza que deseja excluir esse animal?")) {
      try {
        await AnimalsService.deleteAnimal(item.id);
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
    const animalData = await AnimalsService.getAnimals();
    if (animalData) {
      setAnimals(animalData);
      setFilteredData(animalData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (filter.length >= 3 && animals) {
      const filtered = animals.filter((item: Animal) => {
        return (
          item.name.toLowerCase().includes(filter.toLowerCase()) ||
          item.species.toLowerCase().includes(filter.toLowerCase())
        );
      });
      setFilteredData(filtered);
      return;
    }
    if (filter.length === 0 && animals) {
      setFilteredData(animals);
      return;
    }
  }, [filter, animals]);

  function formatData(data: Animal[]) {
    return data.map((item) => {
      return {
        ...item,
        price: item.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
      };
    });
  }
  return (
    <ListAnimalsContainer>
      <Head title="Animais" />
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
    </ListAnimalsContainer>
  );
};

export default ListAnimals;
