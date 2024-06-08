import styled from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  flex-direction: column;
  table {
    position: relative;
    max-width: var(--maxw);
    width: 80%;
    margin: 0 auto;
    border-spacing: 1rem;
  }

  table th {
    text-align: left;
    border-bottom: 1px solid #000;

    :last-child{
      text-align: center;
    }
  }

  table td {
    min-width: 114px;

    :last-child{
      justify-content: center;
    }
  }

  table td:nth-child(1) {
    max-width: 200px;
    padding-right: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  table td:nth-child(7) {
    min-width: 0px;
  }

  table td.last {
    margin-left: 20px;
    border: none;
    display: flex;
    gap: 20px;
  }

  table td.last img {
    height: 25px;
  }

  table tfoot td {
    margin-top: 2rem;
    border: none;
  }

  .actionsContainer {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 12px;
  }
`;

export const ActionButton = styled.div`
  :hover {
    cursor: pointer;
  }

  .editBtn,
  .deleteBtn {
    width: 20px;
    height: 20px;
  }

  .editBtn {
    color: #2B303A;

    :hover{
      color: #1A1D23;
    }
  }

  .deleteBtn {
    color: #FF3D1F;

    :hover{
      color: #d80041;
    
    }
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 50px;

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  }

  .paginationText {
    color: #1A1D23;
    font-size: 12px;
  }
  .paginationBtn {
    color: #2B303A;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      color: #1A1D23;
      cursor: pointer;
    }
  }
`;
