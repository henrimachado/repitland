import styled from "styled-components";

export const ListClientsContainer = styled.div``;

export const ActionsContainer = styled.div`
  max-width: 70%;
  display: flex;
  gap: 30px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;

  a{
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 10px;
    background: #368F8B;

    :hover{
        background: #276864;
    }
  }
  .addBtn{
    font-size: 50px;
    color: #ffffff;
    border-radius: 50%;
    cursor: pointer;
  }
`;
