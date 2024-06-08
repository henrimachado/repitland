import styled from "styled-components";

export const Container = styled.div`
  p {
    text-indent: 20px;
  }
`;

export const Title = styled.div`
  width: 100%;
  background: var(--secundary);
  color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 10px 20px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    color: #368f8b;
  }

  &.openTitle {
    border-radius: 10px 10px 0 0 ;
    h3, .icon {
      color: #368f8b;
    }

    .icon {
      transform: rotate(0deg);
    }
  }

  .icon {
    font-size: 25px;
    transform: rotate(180deg);
    transition: transform 0.2s linear;
  }
`;

export const Content = styled.div`
  background: #595f6b;
  color: #f1f1f1;
  padding: 10px 20px 20px 20px;

  &.openContent {
    border-radius: 0 0 10px 10px;
  }

  h3, h4, h5 {
    color: #f1f1f1;
    margin-bottom: 10px;
  }

  ul {
    margin: 10px 0;
    padding: 0 20px;

    li {
      margin: 5px 0;
    }
  }

  p {
    opacity: .92;
  }  
`;