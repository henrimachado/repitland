import { Animal } from "./models/Animal";
import {AnimalInterface} from './interfaces/AnimalInterface';

export default class AnimalsService{
    private static readonly ANIMAL_URI = 'https://localhost:3000/animal';
    
    public static async getAnimals() : Promise<Animal[]>{
        try{
            const response = await fetch(`${this.ANIMAL_URI}`);
            const getAnimalsResponse = await response.json();
            return getAnimalsResponse;
        } catch (error){
            throw new Error('Occoreu uma falha ao buscar animais.');
        }
    }

    public static async getAnimalById(id: number) : Promise<Animal>{
        try{
            const response = await fetch(`${this.ANIMAL_URI}/${id}`);
            const getAnimalByIdResponse = await response.json();
            return getAnimalByIdResponse;
        } catch (error){
            throw new Error('Occoreu uma falha ao buscar o animal.');
        }
    }

    public static async updateAnimal(id: number, animal: Partial<Animal>) : Promise<void>{
        try{
            const mappedAnimal: Partial<AnimalInterface> = {};

            if (animal.name){
                mappedAnimal.nome = animal.name;
            }

            if(animal.species){
                mappedAnimal.especie = animal.species;
            }
            if(animal.age){
                mappedAnimal.idade = animal.age;
            }
            if(animal.price){
                mappedAnimal.preco = animal.price;
            }
            if(animal.avatar){
                mappedAnimal.avatar = animal.avatar;
            }

            await fetch(`${this.ANIMAL_URI}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(mappedAnimal)
            });
        } catch (error){
            throw new Error('Occoreu uma falha ao atualizar o animal.');
        }
    }

    public static async createAnimal(animal: Animal) : Promise<void>{
        try{
            const mappedAnimal: Partial<AnimalInterface> = {
                nome: animal.name,
                especie: animal.species,
                idade: animal.age,
                preco: animal.price,
                avatar: animal.avatar
            }

            await fetch(`${this.ANIMAL_URI}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(mappedAnimal)
            });
        } catch (error){
            throw new Error('Occoreu uma falha ao criar o animal.');
        }
    }

    public static async deleteAnimal(id: number) : Promise<void>{
        try{
            await fetch(`${this.ANIMAL_URI}/${id}`, {
                method: 'DELETE'
            });
        } catch (error){
            throw new Error('Occoreu uma falha ao deletar o animal.');
        }
    }

    
}