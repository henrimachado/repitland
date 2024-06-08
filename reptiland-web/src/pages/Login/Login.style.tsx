import styled from "styled-components";

export const LoginContainer = styled.div`


  .login {
    max-width: 100vw;
    width: 100%;
    min-height: 100dvh;
    display: grid;
    grid-template-columns: minmax(auto, 800px) 1fr;
    gap: 0;
  }

  .login > main {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: var(--secundary);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .login > main .title {
    max-width: 448px;
    text-align: center;
    color: var(--bg);
    margin-bottom: 70px;
  }

  .login > main .title img {
    margin: 0 auto;
    margin-bottom: 30px;
  }

  .login > main .title h1 {
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 10px;
  }

  .login > main .title p {
    font-size: 1.5rem;
    font-weight: 300;
  }

  .login > main form {
    margin-top: -20px;
    position: relative;
    max-width: 448px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 1rem;
  }

  .login > main form span.error {
    color: #fe0000;
    position: absolute;
    right: 0;
    top: -2rem;
    font-style: italic;
  }

  .login > main form label {
    width: 100%;
    color: var(--bg);
  }

  .login > main form label p {
    font-weight: 600;
    font-size: 1rem;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:active,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:hover {
    -webkit-box-shadow: 0 0 0 1000px var(--secundary) inset;
    -webkit-text-fill-color: var(--bg);
  }

  .login > main form label input {
    width: 100%;
    border: none;
    background-color: initial !important;
    border-bottom: 2px solid var(--bg);
    height: 45px;
    color: var(--bg) !important;
    font-size: 1.25rem;
    font-weight: 300;
    padding-left: 0.5rem;
    transition: border 0.2s ease-in-out;
  }

  .login > main form label input.error {
    border-color: #f50000;
  }

  .login > main form label input::placeholder {
    color: var(--bg);
    opacity: 0.5;
  }

  .login > main form label input:focus {
    outline: 0;
    border-bottom: 4px solid var(--bg);
  }

  .login > main form label .senha {
    position: relative;
    display: flex;
    align-items: center;
  }

  .login > main form label .senha .vision {
    box-sizing: content-box;
    display: block;
    position: absolute;
    background: #000;
    width: 1rem;
    padding: 0.5rem;
    right: 0;
    outline: 0;
    border: none;
    background-color: initial;
    cursor: pointer;
  }

  .login > main form a {
    margin-left: auto;
    color: var(--bg);
    margin-bottom: 55px;
  }

  .login > main form > button {
    padding: 16px;
    width: 100%;
    background-color: var(--primary);
    font-family: var(--font2);
    font-weight: 600;
    font-size: 1.25rem;
    border: none;
    border-radius: 5rem;
    color: var(--bg);
    cursor: pointer;
  }

  .login > img {
    place-self: center;
  }

  @media (max-width: 1200px) {
    body {
      grid-template-columns: minmax(auto, 600px) 1fr;
    }
  }

  @media (max-width: 800px) {
    body {
      grid-template-columns: 1fr;
      background-color: var(--secundary);
      padding: 30px;
    }

    .login {
      display: grid;
      background-color: var(--secundary) !important;
    }

    .login > main .title {
      margin-bottom: 40px;
    }

    .login > main .title img {
      width: 200px;
    }

    .login > main .title h1 {
      font-size: 1.5rem;
      font-weight: 900;
      margin-bottom: 10px;
      word-wrap: break-word;
    }

    .login > main .title p {
      font-size: 1rem;
      font-weight: 300;
    }

    .login > main form label {
      color: var(--bg);
    }

    .login > main form a {
      margin-bottom: 10px;
    }

    .login > img {
      display: none;
    }
  }

  @media (max-width: 800px) {
    .login {
      display: grid;
      background-color: var(--secundary) !important;
    }
  }
`;

export const Politica = styled.a`
  position: relative;
  max-width: 448px;
  width: 100%;  
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  cursor: pointer;
  overflow: hidden;
  
  

  &::after {
    content: "";
    position: absolute;
    width: 290px;
    height: 2px;
    background-color: var(--bg);
    bottom: 0;
    transform: translateX(100%);
    transition: transform .2s linear;
  }

  &:hover::after {
    transform: translateX(0%);
  }

 p, svg {
  color: #f1f1f1;
 }
`;