import styled from "styled-components";

export const EditSalesContainer = styled.div`

@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,300;1,400;1,600;1,700&display=swap);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg: #f7f6dc;
  --primary: #f06a44;
  --secundary: #49999e;
  --outher: #e7e6d1;
  --font1: "Poppins", sans-serif;
  --font2: "Josefin Sans", sans-serif;
  --color: #1f1f1f;
  --maxw: 1230px;
}

body {
  background-color: #E6E6E9;
  font-family: var(--font1);
}

img {
  max-width: 100%;
  display: block;
}

ul li {
  list-style: none;
}

a {
  text-decoration: none;
}

a.button {
  display: inline-block;
  font-family: var(--font1);
  border: 3px solid var(--primary);
  border-radius: 3rem;
  color: #fff;
  background-color: var(--primary);
  padding: 10px 14px;
  font-weight: 600;
  width: fit-content;
  padding: .5rem 1.25rem;
  flex-shrink: 0;
}

h2 {
  font-size: 2rem;
  font-weight: 900;
  color: var(--primary);
}

p {
  font-size: 1rem;
  font-weight: 500;
}

strong {
  font-weight: 700;
}

.content {
  max-width: var(--maxw);
  min-height: 100vh;
  margin: 0 auto;
  padding: 50px;
}

.fullBleed {
  box-shadow: 0 0 0 100vmax var(--secundary);
  clip-path: inset(0 -100vmax);
  color: var(--bg);
}

.fullBleed h2 {
  color: var(--bg);
}

.content.blue {
  background-color: var(--secundary);
}

.grid2 {
  display: grid !important;
  grid-template-columns: 1fr 1fr !important;
  align-items: center !important;
}

@media (max-width:950px) {
  body {
    background-color: #f7f6dc !important;
    padding: 0 !important;
  }

  header {
    padding: 0 1rem;
  }

  main {
    padding: 10px;
  }
}


main {
  min-height: calc(100vh - 12.5rem);
  max-width: var(--maxw);
  margin: 0 auto;
}

main .container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 90px;
  position: relative;
}

main .container::after {
  content: "";
  display: block;
  position: absolute;
  width: 50%;
  height: .8rem;
  background-color: var(--primary);
  bottom: 0;
  right: 0;
  border-radius: 1rem;
}

main .container div {
  align-self: center;
  font-family: var(--font1);
}

main .container div h1 {
  font-size: 3rem;
  color: var(--primary);
  font-weight: 900;
}

main .container div p {
  font-size: 2rem;
  margin-bottom: 1rem;
  line-height: 3.25rem;
}

@media (max-width:950px) {
  main {
    padding: 0 10px;
  }

  main .container {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  main .container::after {
    display: none;
  }

  main .container div {
    align-self: center;
    text-align: center;
    font-family: var(--font1);
  }

  main .container img {
    justify-self: center;
    height: 30rem;
  }
}

.header-admin {
  height: 160px;
  background-color: var(--secundary);
  margin-bottom: 88px;
}

.header-admin div {
  max-width: var(--maxw);
  height: inherit;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-admin div>a img {
  width: 217px;
}

.header-admin div>a:last-child img {
  width: 51px;
}

.header-admin div>p {
  font-weight: 900;
  font-size: 2rem;
  color: var(--bg);
}

main.main-admin {
  min-height: auto !important;
}

@media (max-width:950px) {
  .header-admin div>a img {
    width: 157px;
  }

  .header-admin div>p {
    font-size: 1rem;
    text-align: center;
  }
}

.atualizacaoAdmin {
  position: relative;
  max-width: var(--maxw);
  width: 100%;
  min-height: auto !important;
  margin-bottom: 120px;
}

.atualizacaoAdmin .back {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  top: -50px;
}

.atualizacaoAdmin .back a {
  font-weight: 700;
  font-size: 1.8rem;
  font-family: var(--font2);
  color: var(--color);
}

.atualizacaoAdmin .back img {
  width: 30px;
  height: 100%;
}

.atualizacaoAdmin .step {
  position: relative;
  max-width: 475px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto 70px auto;
}

.atualizacaoAdmin .step::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 6px;
  background-color: var(--primary);
}

.atualizacaoAdmin .step span {
  display: grid;
  place-items: center;
  width: 60px;
  height: 60px;
  font-size: 2rem;
  font-weight: 700;
  font-family: var(--font2);
  background-color: var(--primary);
  border-radius: 50%;
  color: #fff;
  z-index: 1;
}

.atualizacaoAdmin .step span.view {
  background-color: var(--secundary);
}

.atualizacaoAdmin .step span.sucess {
  background: url("/assets/media/icons/sucess.svg") no-repeat center !important;
  background-size: 30px 30px !important;
  background-color: var(--secundary) !important;
  color: transparent;
}

.atualizacaoAdmin .step span:last-child {
  width: 28px;
  height: 28px;
  background-color: var(--primary);
}

.concluido {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
}

.concluido h2 {
  margin-bottom: 100px;
}

.concluido .button {
  background-color: var(--bg);
  color: var(--primary);
}

.atualizacaoAdmin form {
  margin-top: 7rem;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.atualizacaoAdmin form h2 {
  color: var(--color);
  margin-bottom: 2rem;
}

.conteudo {
  width: inherit;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 192px 1fr;
  gap: 30px;
  margin-bottom: 50px;
}

.conteudo.step2 {
  grid-template-rows: auto 1fr !important;
}

.formsBloco {
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.formsBloco label,
.formsBloco label input {
  width: inherit;
}

.formsSubBloco {
  display: flex;
  gap: 36px;
}

.formsSubBloco label,
.formsSubBloco label input,
.formsBloco label select,
.conteudo label input {
  width: 100%;
}

.conteudo label p {
  font-family: var(--font1);
  font-weight: 700;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.formsBloco label input,
.formsBloco label select,
.conteudo label input,
.conteudo label select,
.conteudo label textarea {
  height: 40px;
  outline: 0;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid var(--color);
  font-size: 1.25rem;
  padding-left: .5rem;
  font-family: var(--font1);
}

label select:invalid {
  color: gray !important;
}

.formsBloco.right>label {
  order: 2;
}

.conteudo label:last-child {
  grid-column: 1/3;
}

.conteudo textarea {
  width: 100%;
  resize: none;
  font-size: 1.25rem;
  padding: 0 .5rem;
  height: 120px !important;
}

.buttonsArea {
  position: absolute;
  height: 50px;
  right: 0;
  bottom: -50px;
  display: flex;
  align-items: center;
  gap: 30px;
}

.buttonsArea button {
  border: none;
  outline: 0;
  cursor: pointer;
  background: none;
}

.buttonsArea button a {
  padding: .8rem 1.8rem;
  border-radius: 10rem;
  background-color: var(--primary);
  font-size: 1.25rem;
  font-weight: 600;
}

.buttonsArea button.voltar a {
  background-color: transparent;
  color: #1f1f1f;
}

.buttonsArea button a {
  /* color: var(--color); */
  color: #F6F3F3;
}

.disable {
  display: none !important;
}

@media (max-width:950px) {
  .atualizacaoAdmin form {
    margin-bottom: 100px;
  }

  .conteudo {
    display: flex;
    flex-direction: column;
  }

  .formsBloco.right {
    flex-direction: column-reverse;
  }

  .formsSubBloco {
    margin-top: 20px;
  }

  .concluido h2 {
    text-align: center;
    margin-bottom: 00px;
  }

  .buttonsArea {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


}
`;