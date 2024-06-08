import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GiSnake } from "react-icons/gi";
import { EditAnimalsContainer } from "./EditAnimal.style";
import Input from "../../../components/Input/Input";
// import animals from "../../../../mocks/animals.json";
import Head from "../../../Head";
import { Animal } from "../../../services/models/Animal";
import AnimalsService from "../../../services/AnimalsService";
import Snackbar from "awesome-snackbar";

const EditAnimal = () => {
  const [animal, setAnimal] = useState<Animal>();
  const params = useParams();

  const [name, setName] = useState<string>("");
  const [species, setSpecies] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [age, setAge] = useState<number>();

  const [enviado, setEnviado] = useState<boolean>(false);

  useEffect(() => {
    if (params.id) {
      const fetchData = async () => {
        const animal = await AnimalsService.getAnimalById(Number(params.id));
        setAnimal(animal);
        setName(animal.name);
        setSpecies(animal.species);
        setPrice(animal.price);
        setAge(animal.age);
      };
      fetchData();
    }
  }, []);

  async function handleSubmit(e: any) {
    e.preventDefault();

    const updatedAnimal = {
      ...animal,
      name,
      species,
      price,
      age,
    };

    try {
      await AnimalsService.updateAnimal(Number(params.id), updatedAnimal);
      new Snackbar(`Animal atualizado com <b>sucesso</b>`, {
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
      new Snackbar(`Falha ao atualizar animal: ${error}`, {
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
    <EditAnimalsContainer>
      <Head title={`Editar animal: ${animal?.name}`} />

      <main className={`atualizacaoAdmin animeLeft`}>
        <form onSubmit={(e) => handleSubmit(e)}>
          {!enviado ? (
            animal && (
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
                      />
                    </div>
                    <div className="formsSubBloco">
                      <Input
                        label="Idade"
                        name="idade"
                        type="number"
                        value={age}
                        setValue={setAge}
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
            )
          ) : (
            <>
              <div id="c3" className={`concluido aux`}>
                <GiSnake size={"100px"} />
                <h2>Atualização concluída com sucesso!</h2>
                <Link to="/home" className="button">
                  Voltar à tela inicial
                </Link>
              </div>
            </>
          )}{" "}
        </form>
      </main>
    </EditAnimalsContainer>
  );
};

export default EditAnimal;
