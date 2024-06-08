import { ICreateSale } from "./interfaces/ICreateSale";
import { Sale } from "./models/Sale";

export default class SalesService {
    private static readonly SALES_URI = 'https://localhost:3000/sale';
    
    public static async getSales() : Promise<Sale[]>{
        try{
            const response = await fetch(`${this.SALES_URI}`);
            const getSalesResponse = await response.json();
            return getSalesResponse;
        } catch (error){
            throw new Error('Occoreu uma falha ao buscar vendas.');
        }
    }

    public static async getSaleById(id: number) : Promise<Sale>{
        try{
            const response = await fetch(`${this.SALES_URI}/${id}`);
            const getSaleByIdResponse = await response.json();
            return getSaleByIdResponse;
        } catch (error){
            throw new Error('Occoreu uma falha ao buscar a venda.');
        }
    }

    public static async updateSale(id: number, sale: Partial<Sale>) : Promise<void>{
        try{
            await fetch(`${this.SALES_URI}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(sale)
            });
        } catch (error){
            throw new Error('Occoreu uma falha ao atualizar a venda.');
        }
    }

    public static async createSale(sale: ICreateSale) : Promise<void>{
        try{
            const response = await fetch(`${this.SALES_URI}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(sale)
            });
            
            const responseJson = await response.json();
            
            if (response.status !== 201){
                throw new Error(responseJson.msg);
            }
        } catch (error){
            throw error;
        }
    }

    public static async deleteSale(id: number) : Promise<void>{
        try{
            await fetch(`${this.SALES_URI}/${id}`, {
                method: 'DELETE',
            });
        } catch (error){
            throw new Error('Occoreu uma falha ao deletar a venda.');
        }
    }
}