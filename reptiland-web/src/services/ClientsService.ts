import { Client } from "./models/Client";

export default class ClientsService{
    private static readonly CLIENT_URI = 'https://localhost:3000/client';
    
    public static async getClients() : Promise<Client[]>{
        try{
            const response = await fetch(`${this.CLIENT_URI}`);
            const getClientsResponse = await response.json();
            return getClientsResponse;
        } catch (error){
            throw new Error('Occoreu uma falha ao buscar clientes.');
        }
    }

    public static async getClientById(id: number) : Promise<Client>{
        try{
            const response = await fetch(`${this.CLIENT_URI}/${id}`);
            const getClientByIdResponse = await response.json();
            return getClientByIdResponse;
        } catch (error){
            throw new Error('Occoreu uma falha ao buscar o cliente.');
        }
    }

    public static async updateClient(id: number, client: Partial<Client>) : Promise<void>{
        try{
            await fetch(`${this.CLIENT_URI}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(client)
            });
        } catch (error){
            throw new Error('Occoreu uma falha ao atualizar o cliente.');
        }
    }

    public static async createClient(client: Client) : Promise<void>{
        try{
            await fetch(`${this.CLIENT_URI}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(client)
            });
        } catch (error){
            throw new Error('Occoreu uma falha ao criar o cliente.');
        }
    }

    public static async deleteClient(id: number) : Promise<void>{
        try{
            await fetch(`${this.CLIENT_URI}/${id}`, {
                method: 'DELETE'
            });
        } catch (error){
            throw new Error('Occoreu uma falha ao deletar o cliente.');
        }
    }
}