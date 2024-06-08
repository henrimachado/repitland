import styled from "styled-components";

export const HeaderContainer = styled.div`
  .headerAdmin {
    height: 100px;
    background-color: var(--secundary);
    margin-bottom: 100px;
  }
  .buttonsArea {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }

  .icons{
    color: #F6F3F3;
    width: 40px;
    height: 40px;
  }

  .iconHome{
    :hover{
      color: #368F8B;
    }
  }

  .iconLogout{
    :hover{
      color: #FF6047;
    }
  }

  .buttonLogout{
    padding: 0px !important;
  }
  .headerAdmin div {
    max-width: 100vw;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
  }

  .headerAdmin div a {
    transition: transform 0.3s ease;
  }

  .headerAdmin div a:hover {
    transform: scale(1.05);
  }

  .headerAdmin div > a img {
    width: 217px;
  }

  .headerAdmin div > a:last-child img {
    width: 51px;
  }

  .headerAdmin div > p {
    font-weight: 900;
    font-size: 2rem;
    color: var(--bg);
  }

  @media (max-width: 950px) {
    .headerAdmin div > a img {
      width: 157px;
    }

    .headerAdmin div > p {
      font-size: 1rem;
      text-align: center;
    }
  }
`;
