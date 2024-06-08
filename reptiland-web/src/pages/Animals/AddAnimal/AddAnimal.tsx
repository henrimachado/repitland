import React, { useState } from "react";
import { Link } from "react-router-dom";

import { GiSnake } from "react-icons/gi";
import { AddAnimalsContainer } from "./AddAnimal.style";
import Input from "../../../components/Input/Input";
import Head from "../../../Head";
import { Animal } from "../../../services/models/Animal";
import AnimalsService from "../../../services/AnimalsService";
import Snackbar from "awesome-snackbar";

const AddAnimal = () => {
  const [name, setName] = useState<string>("");
  const [species, setSpecies] = useState<string>("");
  const [price, setPrice] = useState<number>(0); // Provide an initial value for price
  const [age, setAge] = useState<number>(0); // Provide an initial value for age

  const [enviado, setEnviado] = useState<boolean>(false);

  async function handleSubmit(e: any) {
    e.preventDefault();

    const newAnimal: Animal = {
      id: 0,
      name,
      species,
      price,
      age,
      avatar: "",
    };

    try {
      await AnimalsService.createAnimal(newAnimal);
      new Snackbar(`Animal cadastrado com <b>sucesso</b>`, {
        theme: "success",
        position: "bottom-center",
        timeout: 3000,
        style: {
          container: [
            ["background-color", "#368F8B"],
            ["border-radius", "4px"],
          ],
          message: [["color", "#FFF"]],
        },
      });
      setEnviado(true);
    } catch (error) {
      new Snackbar(`Falha ao cadastrar animal: ${error}`, {
        theme: "error",
        position: "bottom-center",
        timeout: 3000,
        style: {
          container: [
            ["background-color", "rgb(255, 61, 31)"],
            ["border-radius", "4px"],
          ],
          message: [["color", "#FFF"]],
        },
      });
    }
  }
  return (
    <AddAnimalsContainer>
      <Head title={"Cadastrar animal"} />

      <main className={`atualizacaoAdmin animeLeft`}>
        <form onSubmit={(e) => handleSubmit(e)}>
          {!enviado ? (
            <>
              <h2 id="title">Dados gerais</h2>
              <div id="c1" className={`conteudo aux`}>
                <div className="formsBloco">
                  <div className="formsSubBloco">
                    <Input
                      label="Nome"
                      name="nome"
                      type="text"
                      value={name}
                      setValue={setName}
                      placeholder="Nome do animal"
                      required
                    />
                  </div>
                  <div className="formsSubBloco">
                    <Input
                      label="Idade"
                      name="idade"
                      type="number"
                      value={age}
                      setValue={setAge}
                      required
                      placeholder="0"
                    />
                  </div>
                </div>

                <div className={`formsBloco right`}>
                  <div className="formsSubBloco">
                    <Input
                      label="Espécie"
                      type="text"
                      name="especie"
                      value={species}
                      setValue={setSpecies}
                      placeholder="Espécie"
                      required
                    />
                  </div>
                  <div className="formsSubBloco">
                    <Input
                      label="Preço"
                      type="number"
                      step={0.01}
                      name="preco"
                      value={price}
                      setValue={setPrice}
                      placeholder="0.0"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="buttonsArea">
                <button className="voltar">
                  <Link to="/home/animais">Cancelar</Link>
                </button>
                <button>
                  <a>Cadastrar</a>
                </button>
              </div>
            </>
          ) : (
            <>
              <div id="c3" className={`concluido aux`}>
                <GiSnake size={"100px"} />
                <h2>Cadastro concluído com sucesso!</h2>
                <Link to="/home" className="button">
                  Voltar à tela inicial
                </Link>
              </div>
            </>
          )}{" "}
        </form>
      </main>
    </AddAnimalsContainer>
  );
};

export default AddAnimal;
