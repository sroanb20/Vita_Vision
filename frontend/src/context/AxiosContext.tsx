import axios from 'axios';
import {IUser} from "../interfaces/IUser";


const baseURL = 'http://localhost:8080/vitamins'; // Basis-URL für die Anfragen

const axiosContext = {
    async getUsers() {
        try {
            const response = await axios.get(`${baseURL}/getUser`);
            const users: IUser[] = [];
            response.data.map((user: any) => (users.push(user as IUser)));
            return users;
        } catch (error:any) {
            throw new Error('Fehler beim Abrufen der Members: ', error.message);
        }
    },

    
};


export default axiosContext;
