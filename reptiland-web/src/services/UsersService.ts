import { ICreateUser } from "./interfaces/ICreateUser";
import { User } from "./models/User";

export default class UsersService {
    private static readonly USER_URI = 'https://localhost:3000/user';
    
    public static async getUsers() : Promise<User[]>{
        try{
            const response = await fetch(`${this.USER_URI}`);
            const getUsersResponse = await response.json();
            return getUsersResponse;
        } catch (error){
            throw new Error('Occoreu uma falha ao buscar usuários.');
        }
    }

    public static async getUserById(id: number) : Promise<User>{
        try{
            const response = await fetch(`${this.USER_URI}/${id}`);
            const getUserByIdResponse = await response.json();
            return getUserByIdResponse;
        } catch (error){
            throw new Error('Occoreu uma falha ao buscar o usuário.');
        }
    }

    public static async updateUser(id: number, user: Partial<User>) : Promise<void>{
        try{
            await fetch(`${this.USER_URI}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
        } catch (error){
            throw new Error('Occoreu uma falha ao atualizar o usuário.');
        }
    }

    public static async createUser(user: ICreateUser) : Promise<void>{
        try{
            const response = await fetch(`${this.USER_URI}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const responseJson = await response.json();
            
            if (response.status !== 201){
                throw new Error(responseJson.msg);
            }
        } catch (error){
            throw error;
        }
    }

    public static async deleteUser(id: number) : Promise<void>{
        try{
            await fetch(`${this.USER_URI}/${id}`, {
                method: 'DELETE'
            });
        } catch (error){
            throw new Error('Occoreu uma falha ao deletar o usuário.');
        }
    }
}