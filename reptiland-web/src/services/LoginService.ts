import { User } from "./models/User";
import { UserCredentials } from "./models/UserCredentials";

export default class LoginService {
    private static readonly LOGIN_URI = 'https://localhost:3000/login';

    public static async login(userCredentials: UserCredentials): Promise<User> {
        try {
            const response = await fetch(`${this.LOGIN_URI}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userCredentials)
            });

            const responseJson = await response.json();
            if (response.status !== 200) {
                throw new Error(responseJson.msg);
            }
            return responseJson;
        } catch (error) {
            throw error;
        }
    }
}