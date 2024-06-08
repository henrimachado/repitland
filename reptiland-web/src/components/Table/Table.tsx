import React, { useState } from "react";
import {
  ActionButton,
  PaginationContainer,
  TableContainer,
} from "./Table.style";
import {
  MdEdit,
  MdDelete,
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

interface ITableProps {
  headers: string[];
  dataKeys: string[];
  data: any[];
  onEdit: (item: any) => void;
  onDelete: (item: any) => void;
}

interface IPaginationProps {
  page: number;
  data: any[];
}
const Table = ({ headers, dataKeys, data, onEdit, onDelete }: ITableProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const getPaginatedData = ({ page, data }: IPaginationProps) => {
    const startIndex = (page - 1) * 5;
    const endIndex = startIndex + 5;
    return data.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(data.length / 5);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {getPaginatedData({
            page: currentPage,
            data: data,
          }).map((item, rowIndex) => (
            <tr key={rowIndex}>
              {dataKeys.map((key, colIndex) => (
                <td key={colIndex}>{item[key]}</td>
              ))}
              <td className="actionsContainer">
                <ActionButton onClick={() => onEdit(item)}>
                  <MdEdit className="editBtn" />
                </ActionButton>
                <ActionButton onClick={() => onDelete(item)}>
                  <MdDelete className="deleteBtn" />
                </ActionButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <PaginationContainer>
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          className="paginationBtn"
        >
          <MdKeyboardDoubleArrowLeft />
        </button>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="paginationBtn"
        >
          <MdOutlineKeyboardArrowLeft />
        </button>

        <span className="paginationText">
          Página {currentPage} de {totalPages}
        </span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="paginationBtn"
        >
          <MdKeyboardArrowRight />
        </button>
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="paginationBtn"
        >
          <MdKeyboardDoubleArrowRight />
        </button>
      </PaginationContainer>
    </TableContainer>
  );
};

export default Table;
