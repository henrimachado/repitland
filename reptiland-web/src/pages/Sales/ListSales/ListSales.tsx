import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Filter from "../../../components/Filter/Filter";
import Table from "../../../components/Table/Table";
import { IoAddOutline } from "react-icons/io5";
import { ActionsContainer, ListSalesContainer } from "./ListSales.style";
import Head from "../../../Head";
import { Sale } from "../../../services/models/Sale";
import SalesService from "../../../services/SalesService";
import Snackbar from "awesome-snackbar";

const ListSales = () => {
  const navigate = useNavigate();

  const [sales, setSales] = useState<Sale[]>();

  const [filter, setFilter] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Sale[]>([]);

  const headers = [
    "Id",
    "Animal",
    "Cliente",
    "Valor",
    "Desconto",
    "Vendedor",
    "Ações",
  ];
  const dataKeys = [
    "id",
    "animal_id",
    "client_id",
    "price",
    "discount",
    "sold_by",
  ];

  function onEdit(item: any) {
    navigate(`editar/${item.id}`);
  }

  async function onDelete(item: any) {
    if (window.confirm("Tem certeza que deseja excluir essa venda?")) {
      try {
        await SalesService.deleteSale(item.id);
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
    const salesData = await SalesService.getSales();
    if (salesData) {
      setSales(salesData);
      setFilteredData(salesData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function formatData(data: Sale[]) {
    return data.map((item) => {
      return {
        ...item,
        client_id: item.client_id
          .toString()
          .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"),
        sold_by: item.sold_by
          .toString()
          .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"),
        price: item.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
        discount: item.discount * 100 + "%",
      };
    });
  }
  useEffect(() => {
    if (filter.length >= 0 && sales) {
      const filtered = sales.filter((item: Sale) => {
        return (
          item.client_id.toString().includes(filter) ||
          item.sold_by.toString().includes(filter)
        );
      });
      setFilteredData(filtered);
      return;
    }
    if (filter.length === 0 && sales) {
      setFilteredData(sales);
      return;
    }
  }, [filter]);

  return (
    <ListSalesContainer>
      <Head title="Vendas" />
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
    </ListSalesContainer>
  );
};

export default ListSales;
