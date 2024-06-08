import styled from "styled-components";

export const PoliticaMain = styled.main`
  max-width: 1440px;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 30px;
  padding: 0 20px;
`;

export const PoliticaHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .icon {
    position: absolute;
    right: 0;
  }

  @media only screen and (max-width: 768px) {
    justify-content: space-between;

    h2 {
      flex-shrink: 0;
    }
  }

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const VoltarLogin = styled.a`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  background: var(--secundary);
  padding: 8px 15px;
  border-radius: 10px;
  gap: 10px;
  cursor: pointer;
  box-shadow:  3px 3px 5px #a7a7a7;

  &:hover {
    p,svg {
      color: var(--primary);
    }
  }

  p, svg {
    transition: color .2s ease;
    color: #f1f1f1;
  }
  p {
    font-size: 18px;
  }
  svg {
    font-size: 30px;
  }

  @media only screen and (max-width: 768px) {
    position: relative;
  }
`;

export const PoliticaDownload = styled.a`
  float: right;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--secundary);
  padding: 8px 15px;
  border-radius: 10px;
  gap: 10px;
  cursor: pointer;
  box-shadow:  3px 3px 5px #a7a7a7;

  &:hover {
    p, svg {
      color: var(--primary);
    }
  }

  p, svg {
    color: #f1f1f1;
    transition: color .3s ease;
  }

  svg {
    font-size: 20px;
  }
`;

export const PoliticaContainer = styled.div`
 display: flex;
 flex-direction: column;
 gap: 15px;
 margin-top: 30px;

 .mb-10 {
    margin-bottom: 15px;
  }
`;

export const Textos = styled.div`
  margin-bottom: 15px;

  h4 {
    font-size: 18px;
    padding-left: 5px;
  }
  h5 {
    font-size: 16px;
    padding-left: 10px;
    font-style: italic;
    opacity: .75;
  }

  h4, h5 {
    margin: 0;
  }

  p {
    padding: 10px 10px 0 10px;
    text-indent: 20px;

    &:last-child {
      padding-bottom: 20px;
    }
  }

  ul li {
    padding-left: 10px;    
  }
`;