import styled from "styled-components";

export const MenuItemContainer = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 4px;
  background: #2b303a;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 14px;
  cursor: pointer;
  transition: transform 0.3s ease;
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  :hover {
    transform: scale(1.05);
  }

  .icon {
    color: #368f8b;
    width: 50px;
    height: 50px;
  }
`;
