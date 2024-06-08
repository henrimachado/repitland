import styled from "styled-components";

export const PainelAdminContainer = styled.div`


  
  .container {
    width: 100%;
    min-height: calc(100vh - 496px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
  }

  .cards {
    margin-top: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 32px;
  }

  @media (max-width: 900px) {
    .cards {
      flex-direction: column;
    }
  }

  .card {
    width: 286px;
    height: 300px;
    border-radius: 20px;
    background: linear-gradient(180deg, #49999e 0%, #62b0b5 100%);
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 14px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .card:hover {
    transform: scale(1.05);
  }

  .card p {
    color: #fff;
    text-align: center;
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }
`;
